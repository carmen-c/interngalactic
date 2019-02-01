<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/LoginPage">LoginPage</router-link> | 
      <router-link to="/resumeUpload">resumeUpload</router-link> | 
	  <router-link to ="/jobForm">Job Form</router-link> |
	  <router-link to ="/jobFeedPage">Job Feed</router-link> |
	  <router-link to ="/applicants">applicants</router-link> | <router-link to ="/currentJobPost">currentJobPost</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>

/*Boot strap */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app {
	z-index: 999;
}
</style>
