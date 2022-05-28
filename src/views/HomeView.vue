<template>
  <div class="mn">
    <div class="func">
      <div class="func">
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
      </div>
      <div class="func">
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
        <div class="funcEl" v-on:click="$router.push({ name: 'dev'})"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home-view',

    components: {
      
    },
  }
</script>
<style scoped lang="scss">
  .mn{

  }
  .func{

  }
</style>
