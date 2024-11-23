<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {TheNavigation},
}

</script>

<template>
  <header>
    <the-navigation/>
  </header>

  <div class="container">
      <RouterView/>
  </div>

</template>

<style scoped>

</style>
