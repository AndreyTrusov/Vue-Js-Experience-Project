<script>
import destinationsData from "@/data.json";
import ExperienceView from "@/views/ExperienceView.vue";
import {createWebHistory as $router} from "vue-router/dist/vue-router.esm-browser.js";
import ExperienceCard from "@/components/ExperienceCard.vue";
import {useRouter} from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return {goBack};
  },
  components: {
    ExperienceCard,
    ExperienceView,
  },
  data() {
    return {
      destination: null,
    };
  },
  props: {
    slug: {type: String, required: true},
    experienceSlug: String
  },
  created() {
    const slug = this.$route.params.slug;
    this.destination = destinationsData.destinations.find(d => d.slug === slug);
  },
  watch: {
    $route() {
      this.getDestinationBySlug();
    },
  },
  methods: {
    $router,
    getDestinationBySlug() {
      this.destination = destinationsData.destinations.find(
          (dest) => dest.slug === this.slug
      );
    },
  },
};
</script>


<template>
  <button @click="goBack" class="go-back">GO BACK</button>
  <div class="destination">
    <div class="destination-details">
      <div>
        <h1>{{ destination.name }}</h1>
        <p>{{ destination.description }}</p>
      </div>
      <img :src="'/images/' + destination.image" :alt="destination.name"/>
    </div>

    <h2>Experiences in {{ destination.name }}</h2>
    <ExperienceCard
        :experiences="destination.experiences"
        :slug="destination.slug"
    />
  </div>
</template>
<style scoped>

</style>