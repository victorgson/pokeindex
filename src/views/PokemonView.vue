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

  .card {
    margin-inline: auto;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  table {
    text-align: start;
  }
</style>

<template>
  <div class="container">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="data">
      <PokemonCard
        :name="data.name"
        :url="data.sprites.front_default"
        class="card"
      />
      <div class="content">
        <h1>STATS</h1>

        <table>
          <tr>
            <th>Stat</th>
            <th>Value</th>
            <th>Abilities</th>
          </tr>
          <tr :key="i" v-for="(stat, i) in data.stats">
            <td>{{ stat.stat.name }}</td>
            <td>{{ stat.base_stat }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
