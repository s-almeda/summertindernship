<template>
  <div id="app">
    <people name="jeff fisher"></people>
    <people></people>
  </div>
</template>
<template>
  <div id="">
</template>
<!-- <div id="app">
  {{ message }}
</div> -->
<script>
  import people from './components/people.vue'
  export default {
    name: 'app',
    components: {
      people
    }
  }
</script>