<template>
  <div class="container">
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
  .container {
    @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto text-black;
  }
  .chart {
    @apply rounded-xl shadow-2xl bg-gray-900 p-10;
    /* color: #; */
    box-shadow: 9px 9px 16px rgb(6,6,6,0.6), -9px -9px 16px rgba(6,6,6, 0.5);
  }


  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
