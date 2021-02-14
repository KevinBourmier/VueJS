<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
    <div class="container">
    <a class="navbar-brand" href="/">FootApp</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Championnat</router-link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>
