<script>
  import axios from 'axios'
  import PokemonCard from './PokemonCard.vue'

  export default {
    created() {
      axios('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(
        (resp) => {
          // this.pokemons = resp.data.results
          resp.data.results.forEach((e) => {
            axios('https://pokeapi.co/api/v2/pokemon/' + e.name).then(
              (resp) => {
                const {
                  data: {
                    name,
                    id,
                    sprites: { front_default }
                  }
                } = resp
                this.pokemons.push({
                  pokeName: name,
                  pokeImage: front_default,
                  id: id
                })
              }
            )
          })
        }
      )
    },
    data() {
      return {
        pokemons: []
      }
    },
    components: {
      PokemonCard
    }
  }
</script>

<style scoped>
  td {
    display: inline-block;
  }
  .center {
    text-align: center;
  }
  .card:hover {
    cursor: pointer;
    background-color: green;
  }
</style>

<template>
  <table class="center">
    <tr>
      <td :key="pokemon.id" v-for="pokemon in pokemons">
        <PokemonCard :name="pokemon.pokeName" :url="pokemon.pokeImage" />
      </td>
    </tr>
  </table>
</template>
