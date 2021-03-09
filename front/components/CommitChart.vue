<script>
  import {
    Bar
  } from 'vue-chartjs';
  import moment from 'moment'
  export default {
    components: true,
    extends: Bar,
    data() {
      return {
        timeString: null
      }
    },
    props: {
      // label: {
      //   type: String
      // },
      chartData: {
        type: Array
      },
      options: {
        type: Object
      }
    },
    mounted() {
      // console.log(this.chartData)
      const dates = this.chartData.map(d => d.moment);
      const totals = this.chartData.map(d => d.nb);
      const times = this.chartData.map(d => Math.round( d.time/1.4));
      const dayNow = moment().format('DD/MM/YYYY')
      console.log(dayNow)
      console.log(dates)
      // this.chartData.forEach(d => {
      //   console.log(d.time)
      //   // if (d.time )
      //   this.timeString = moment(d.time * 1000).format('HH:mm:ss')

      // });
      this.renderChart({
        labels: dates,
        datasets: [{
          label: 'ml de liquide Inhalé par heures',
          backgroundColor: '#bb3434',
          data: times
        }],
      })
    }
  }

</script>
