<template>
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
   </template> 

<script>

export default {
  name: 'navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

