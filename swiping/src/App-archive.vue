<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your hello world App"/>
  </div>
</template>

<template>
  <people name="Jeff fisher"></people>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import people from './components/people.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    people
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>