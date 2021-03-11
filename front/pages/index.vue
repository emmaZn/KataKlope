<template>
  <div class="container poppins" data-app>
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <v-card dark>
        <v-card-title class="headline">
          Configuration de votre KataKlope
        </v-card-title>
        <v-row justify="center" class="ma-0 pa-0" style="margin: 0px">
          <v-col cols="10" class="ma-0 pa-0">
            <v-text-field label="Puissance de votre cigarette (watts)" />
            <v-text-field label="Quantité de nicotine dans le e-liquide (mg)" />
            <v-radio-group
              v-model="row"
              label="A quelle fréquence fumez-vous ?"
            >
              <v-radio
                class="ml-16"
                label=" Moins de 5 fois par jour"
                value="radio-1"
              ></v-radio>
              <v-radio
                class="ml-16"
                label=" Entre 5 et 15 fois par jour"
                value="radio-2"
              ></v-radio>
              <v-radio
                class="ml-16"
                label=" Plus de 15 fois par jour"
                value="radio-3"
              ></v-radio>
            </v-radio-group>
            <v-radio-group
              v-model="row2"
              label="Vous souhaitez que votre programme soit : "
            >
              <v-radio class="ml-16" label=" Libre" value="radio-1"></v-radio>
              <v-radio class="ml-16" label=" Modéré" value="radio-2"></v-radio>
              <v-radio class="ml-16" label=" Sérieux" value="radio-3"></v-radio>
            </v-radio-group>
            <v-btn @click="save" class="mb-2">Sauvegarder les paramètres</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <div>
      <h1 class="title">kataklope</h1>
    </div>
    <v-row v-if="loaded">
      <v-btn icon dark class="mb-2" @click="previous"
        ><v-icon>mdi-arrow-left</v-icon></v-btn
      >
      <p class="pt-2 pl-2 pr-2 date">{{ dateFormated }}</p>
      <v-btn icon dark class="mb-2" @click="next"
        ><v-icon>mdi-arrow-right</v-icon></v-btn
      >
    </v-row>
    <div class="chart" v-if="loaded">
      <CommitChart
        :chartData="pressDate"
        :options="chartOptions"
        :key="componentKey"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      componentKey: 0,
      pressDate: [],
      dialog: true,
      day: "",
      date: "",
      dateFormated: "",
      loaded: false,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      row: "",
      row2: "",
    };
  },
  async created() {
    this.day = new Date();
    this.getDay(this.day);
    for (let i = 0; i < 24; i++) {
      let obj = {
        moment: this.dateFormated + i.toString(),
        time: 0,
      };
      this.pressDate.push(obj);
    }
    console.log("hours", this.pressDate);
    await this.getData();
  },
  methods: {
    getData() {
      console.log("day of request", this.date);
      for (let i = 0; i < 24; i++) {
        let obj = {
          moment: this.dateFormated + i.toString(),
          time: 0,
        };
        this.pressDate[i] = obj;
      }
      axios
        .get("http://192.168.1.243:5000/pressDay", {
          params: { day: this.date },
        })
        .then((response) => {
          console.log("press ", response.data);
          response.data.forEach((d) => {
            const date = d.date;
            const time = d.time;
            let hour = date.substr(6, 2);
            if (hour < 10) hour = hour.substr(1, 1);
            console.log(hour);
            this.pressDate[hour].time += time;
          });
          this.press = response.data;
          this.componentKey += 1;
        })
        .catch((error) => console.log("error ", error));
    },
    getDay(day) {
      let today = day;
      this.dateFormated =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear() +
        " ";
      console.log("today", today);
      let y = today.getFullYear().toString();
      let m = today.getMonth() + 1;
      let d = today.getDate();
      if (today.getMonth() + 1 < 10) {
        m = "0" + (today.getMonth() + 1);
      }
      if (today.getDate() < 10) {
        d = "0" + today.getDate();
      }
      this.date = y.substr(2, 2) + m + d;
    },

    previous() {
      this.day.setDate(this.day.getDate() - 1);
      this.getDay(this.day);
      this.getData();
    },
    next() {
      this.day.setDate(this.day.getDate() + 1);
      this.getDay(this.day);
      this.getData();
    },
    save() {
      this.dialog = false;
      this.loaded = true;
    },
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.container {
  @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto;
  font-family: "Poppins", sans-serif;
}
.chart {
  @apply rounded-xl p-10;
  /* color: #; */
  background: #1e1e1e;
  min-width: 60%;
  box-shadow: -9px -9px 10px rgba(29, 36, 47, 0.25),
    9px 9px 10px rgba(0, 0, 0, 0.25), inset 9px 9px 10px rgba(29, 36, 47, 0.5),
    inset -9px -9px 10px rgba(0, 0, 0, 0.25);
}
.date {
  color: white;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: white;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
