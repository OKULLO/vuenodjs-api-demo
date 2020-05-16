<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary bar">
        <router-link class="navbar-brand text-white" to="/">Home</router-link> 
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0 text-white">
          <li class="nav-item my-2 my-lg-0">
              <router-link class="nav-link" to="/about">Product</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/register">Sign Up</router-link>
          </li>
          
        </ul>
        </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.bar {
  color: aquamarine;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
