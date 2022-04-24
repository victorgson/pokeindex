<script>
  import PokemonsList from '../components/PokemonsList.vue'

  export default {
    props: {
      msg: String
    },
    components: { PokemonsList }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>

<template>
  <h1>Pokemons</h1>
  <PokemonsList />
</template>
