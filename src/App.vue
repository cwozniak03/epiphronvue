<script setup lang="ts">
import { useRouter } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/input">Input</RouterLink>
      </nav>
  </header>

  <RouterView />  

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 80vw;
  place-items: center;
  border-bottom: 1px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0rem;
  place-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    border-bottom: 1px solid var(--color-border);
  }

  .logo {
    margin: 0 2rem 0 0;
  }



  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
