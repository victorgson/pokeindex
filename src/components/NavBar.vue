<script>
  export default {
    data() {
      return {
        searchTerm: null
      }
    },
    methods: {
      onSearchNavigate(value) {
        this.$router.push('/pokemon/' + value)
      }
    },
    computed: {
      globalSearchTerm() {
        return this.$store.state.searchTerm
      },
      localSearchTerm() {
        return this.searchTerm.toLowerCase()
      }
    }
  }
</script>

<style lang="scss">
  $some-color: #fff;

  .form-control {
    background-color: $some-color;
  }
</style>
<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">POKEMONS</a>
      <form class="d-flex">
        <input
          v-model="searchTerm"
          class="form-control me-2"
          type="search"
          placeholder="Search for Pokemon.."
          aria-label="Search"
        />
        <button
          @click.prevent="
            $store.commit('setSearchTerm', localSearchTerm),
              onSearchNavigate(localSearchTerm)
          "
          class="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
        <p>{{ globalSearchTerm }}</p>
      </form>
    </div>
  </nav>
</template>
