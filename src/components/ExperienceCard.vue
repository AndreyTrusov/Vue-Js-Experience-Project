<script>

export default {
  name: "ExperienceCard",
  props: {
    experiences: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToExperience(experienceSlug) {
      this.$router.push({
        name: 'experience',
        params: {
          slug: this.slug,
          experienceSlug: experienceSlug
        }
      });
    }
  }
};
</script>

<template>
  <div class="experiences">
    <div class="cards">
      <div class="card" v-for="experience in experiences"
           :key="experience.slug"
           @click="goToExperience(experience.slug)">
        <img :src="`../../public/images/${experience.image}`" :alt="experience.name"/>
        <h1>{{ experience.name }}</h1>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<style scoped>

</style>