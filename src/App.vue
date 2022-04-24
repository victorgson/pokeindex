<script>
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>

<template>
  <NavBar />
  <!-- <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/another">Another</RouterLink>
      </li>
      <li>
        <RouterLink to="/pokemon">Pokemon</RouterLink>
      </li>
    </ul>
  </nav> -->

  <main>
    <RouterView />
  </main>
</template>

<style>
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
