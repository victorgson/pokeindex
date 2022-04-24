<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'Charizard'
      },
      url: {
        type: String,
        default: '...'
      }
    },
    methods: {
      goToPokemon(value) {
        this.$router.push('/pokemon/' + value)
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <div class="card" style="width: 10rem" @click="goToPokemon(this.name)">
    <img :src="this.url" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ this.name }}
      </p>
    </div>
  </div>
</template>
