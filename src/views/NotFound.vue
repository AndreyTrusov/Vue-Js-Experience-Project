<script>
export default {
  name: "NotFound",
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' }); // Redirects to the Home route
    }
  }
}
</script>


<template>
  <div class="not-found">
    <div class="message-container">
      <h1 class="error-code">404</h1>
      <p class="message">Oops! The page you're looking for is lost in space.</p>
      <p class="suggestion">But don't worry, we'll help you find your way back!</p>
      <button @click="goHome">Go to Homepage</button>
    </div>
    <div class="spaceship"></div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  position: relative;
}

.message-container {
  margin-top: -500px;
  color: black;
  text-align: center;
  z-index: 10;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ff6347;
}

.message {
  font-size: 24px;
  margin: 10px 0;
}

.suggestion {
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff4500;
}

</style>