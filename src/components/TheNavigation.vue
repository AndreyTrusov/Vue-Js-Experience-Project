<script>
import dataDestinations from "@/data.json";
import { useRoute } from "vue-router";

export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: dataDestinations.destinations,
    }
  },
  setup() {
    const route = useRoute();
    return { route };
  },
}
</script>

<template>
  <nav id="nav">
    <RouterLink to="/" :class="{ active: route.path === '/' }">Home</RouterLink>
    <div v-for="destination in destinations" :key="destination.name">
      <RouterLink
          :to="{ name: 'destination', params: { slug: destination.slug } }"
          :class="{ active: route.path === `/destination/${destination.slug}` }">
        {{ destination.name }}
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>

</style>