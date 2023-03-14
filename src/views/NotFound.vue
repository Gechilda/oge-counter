<template>
    <div class="notfound">
      <h1 class="notfound__title">Page not found!</h1>
      <p class="notfound__message">The page you are looking for does not exist.</p>
      <router-link class="notfound__button" to="/">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  .notfound {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .notfound__title {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  .notfound__message {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .notfound__button {
    padding: 10px 20px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #2196f3;
    cursor: pointer;
  }
  
  .notfound__button:hover {
    background-color: #0b7dda;
  }
  
  .notfound__button:active {
    transform: translateY(2px);
  }
  </style>
  