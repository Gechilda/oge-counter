<template>
    <div class="counter">
      <h1 class="counter__title">Counter: {{ count }}</h1>
      <div class="counter__buttons">
        <button class="counter__button" @click="increment()">+</button>
        <button class="counter__button" @click="decrement()">-</button>
        <button class="counter__button" @click="reset()">Reset</button>
      </div>
      <div class="counter__input">
        <label for="value">Set Value:</label>
        <input id="value" v-model="value" type="number" />
        <button class="counter__button" @click="setValue(value)">Set</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(['count'])
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'reset', 'setValue']),
    },
    data() {
      return {
        value: 0
      }
    },
    setup() {
      return {}
    }
  }
  </script>
  
  <style scoped>
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  .counter__title {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  .counter__buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .counter__button {
    padding: 10px 20px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #4caf50;
    cursor: pointer;
  }
  
  .counter__button:hover {
    background-color: #3e8e41;
  }
  
  .counter__button:active {
    transform: translateY(2px);
  }
  
  .counter__input {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .counter__input label {
    font-size: 24px;
  }
  
  .counter__input input {
    padding: 10px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    background-color: #f2f2f2;
    outline: none;
  }
  
  .counter__input input:focus {
    background-color: white;
    box-shadow: 0 0 5px #4caf50;
  }
  
  .counter__input button {
    padding: 10px 20px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #2196f3;
    cursor: pointer;
  }
  
  .counter__input button:hover {
    background-color: #0b7dda;
  }
  
  .counter__input button:active {
    transform: translateY(2px);
  }
  </style>
  