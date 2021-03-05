<template>
  <div class="container poppins">
    <div>
      <h1 class="title">
        kataklope
      </h1>
    </div>
    <div class="chart ">
      <CommitChart/>
    </div>
  </div>
</template>

<script>
  // import CommitChart from '@/components/CommitChart'
  export default {
    // components: {
    //   CommitChart
    // }
  }

</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  .container {
    @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto ;
    font-family: 'Poppins', sans-serif;
  }
  .chart {
    @apply rounded-xl shadow-2xl bg-gray-900 p-10;
    /* color: #; */
    box-shadow: 9px 9px 16px rgba(30,30,30,0.6), -9px -9px 16px rgba(30,30,30, 0.5);
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
