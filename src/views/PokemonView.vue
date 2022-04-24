<script>
  import axios from 'axios'
  import PokemonCard from '../components/PokemonCard.vue'

  export default {
    components: {
      PokemonCard
    },
    data() {
      return {
        loading: false,
        data: null,
        error: null
      }
    },
    created() {
      // watch the params of the route to fetch the data again
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
    methods: {
      fetchData() {
        this.error = this.post = null
        this.loading = true
        // replace `getPost` with your data fetching util / API wrapper
        axios(
          'https://pokeapi.co/api/v2/pokemon/' + this.$route.params.pokeName
        ).then(
          (resp) => {
            this.data = resp.data
            console.log(resp.data.name)
            this.loading = false
          },
          (err) => {
            this.error = err
            console.log(err)
          }
        )
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

<template>
  <h1>Pokemon</h1>
  <div class="container">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="data" class="content">
      <PokemonCard :name="data.name" :url="data.sprites.front_default" />
      <!-- <img
        :src="data.sprites.front_default"
        style="width: 10rem; height: 10rem"
      />
      <h2>{{ data.name }}</h2>
      <p>{{ data.body }}</p> -->
    </div>
  </div>
</template>
