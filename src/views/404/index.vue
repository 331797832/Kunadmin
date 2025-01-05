<template>
  <div class="not-found">
    <div class="container">
      <h1 class="title">404</h1>
      <p class="subtitle">Page Not Found</p>
      <p class="description">
        Oops! The page you are looking for does not exist.
      </p>
      <router-link to="/login" class="home-link">Go Back Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  font-family: Arial, sans-serif;
  color: white;
  background: linear-gradient(135deg, #cdefb5, #2575fc);
}

.container {
  text-align: center;
  animation: fade-in 1.5s ease-in-out;
}

.title {
  margin: 0;
  font-size: 8rem;
  animation: bounce 2s infinite;
}

.subtitle {
  margin: 10px 0;
  font-size: 2rem;
}

.description {
  margin: 20px 0;
  font-size: 1.2rem;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  color: #6a11cb;
  text-decoration: none;
  background: white;
  border-radius: 5px;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.home-link:hover {
  color: white;
  background: #6a11cb;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  60% {
    transform: translateY(-15px);
  }
}
</style>
