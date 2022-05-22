<script>
  import PokemonsList from '../components/PokemonsList.vue'

  export default {
    props: {
      msg: {
        default: 'message',
        type: String
      }
    },
    components: { PokemonsList }
  }
</script>

<style scoped></style>

<template><PokemonsList /></template>
