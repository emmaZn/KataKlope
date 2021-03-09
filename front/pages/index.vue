<template>
  <div class="container poppins">
    <div>
      <h1 class="title">
        kataklope
      </h1>
    </div>
    <div class="chart " v-if="pressDate.length > 0">
      <CommitChart :chartData="pressDate" :options="chartOptions"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  // import CommitChart from '@/components/CommitChart'
  export default {
    // components: {
    //   CommitChart
    // },
    data() {
      return {
        pressDate : [],
        pressTime : [],
        press : [],
        loaded: false,
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
        tmp:null
      }
  },
    async created() {
      // const {data} = await axios.get('http://192.168.1.243:5000/press')
      // console.log(data)
      await this.getData()
      
    },
    methods:{
      getData() {
        axios.get('http://192.168.1.243:5000/press')
        .then((response) => {
          // console.log("press ", response.data);
          response.data.forEach(d => {
            const date = d.date
            const time = d.time
            const year = `20${date.substr(0,2)}`
            const mounth = `${date.substr(2,2)}`
            const day = `${date.substr(4,2)}`
            const hour = `${date.substr(6,2)}`
            const moment = day + "/" + mounth + "/" + year + " " + hour + "H"
            console.log(hour, this.tmp)
            console.log(this.tmp + 1 != hour)

            if (this.tmp + 1 != hour) {
              // console.log (moment)
            }
            let found = this.pressDate.find(p => p.moment == moment)
            if (found) {
              found.nb++
              found.time += time
            } else {
              this.pressDate.push({moment, nb:1, time:time})
              this.tmp = hour
              // console.log(this.tmp)
            }

          });
          this.press = response.data
          // console.log(this.press)
          // console.log(this.pressDate)
        })
        .catch((error) => console.log("Product error ", error))
      }
    }
  }

</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  .container {
    @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto ;
    font-family: 'Poppins', sans-serif;
  }
  .chart {
    @apply rounded-xl p-10;
    /* color: #; */
    background: #131820;
    box-shadow: -9px -9px 10px rgba(29, 36, 47, 0.25), 9px 9px 10px rgba(0, 0, 0, 0.25), inset 9px 9px 10px rgba(29, 36, 47, 0.5), inset -9px -9px 10px rgba(0, 0, 0, 0.25);
  }


  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    letter-spacing: 1px;
    color: #2f6cb1;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: rgb(82, 83, 85);
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
