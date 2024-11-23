<script>

import destinationsData from "@/data.json";

export default {
  name: "ExperienceView",
  data() {
    return {
      information: null,
    };
  },
  props: {
    experienceSlug: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  created() {
    this.getExperienceBySlug();
  },
  watch: {
    $route() {
      this.getExperienceBySlug();
    },
  },
  methods: {
    getExperienceBySlug() {
      const destination = destinationsData.destinations.find(d => d.slug === this.slug);

      if (destination) {
        this.information = destination.experiences.find(exp => exp.slug === this.experienceSlug);
      }
    }
  }
};

</script>

<template>
  <div class="experience-details">
    <div v-if="information">
      <div class="experience-card">
        <h2>{{ information.name }}</h2>
        <div>
          <img :src="'/images/' + information.image" :alt="information.name"/>
          <p>{{ information.description }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Experience not found.</p>
    </div>
  </div>
</template>


<style scoped>

</style>