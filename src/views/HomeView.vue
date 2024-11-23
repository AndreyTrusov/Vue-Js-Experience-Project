<script>
import dataDestinations from "@/data.json";

export default {
  name: "HomeView",
  data() {
    return {
      destinations: dataDestinations.destinations,
    }
  },
}
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link v-for="destination in destinations" :key="destination.id"
                   :to="{ name: 'destination', params: { slug: destination.slug } }">
        <h2>{{ destination.name }}</h2>
        <img :src="'/images/' + destination.image" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>


<style scoped>

</style>