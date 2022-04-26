<script>
  import PokemonsList from '../components/PokemonsList.vue'

  export default {
    props: {
      msg: String
    },
    components: { PokemonsList }
  }
</script>

<style scoped></style>

<template>
  <PokemonsList />
</template>
