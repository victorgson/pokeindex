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
      },
      test() {
        this.$store.commit('setSearchTerm', this.localSearchTerm)
        this.onSearchNavigate(this.localSearchTerm)
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
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">POKEINDEX</a>
      <form class="d-flex">
        <input
          v-model="searchTerm"
          class="form-control me-2"
          type="search"
          placeholder="Search for a Pokemon.."
          aria-label="Search"
        />
        <button
          @click.prevent="test"
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
