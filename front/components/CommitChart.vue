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
      this.renderChart({
        labels: dates,
        datasets: [{
          label: 'ml de liquide Inhalé par heures',
          backgroundColor: '#C71585',
          data: times
        }],
      })
    }
  }

</script>
