<template>
  <div class="container-main">
    <div>
      <NavDrawer />
    </div>
    <router-view />
  </div>
</template>
<script>
import NavDrawer from "./components/Menu/NavDrawer.vue";
export default {
  name: "App",
  components: {
    NavDrawer,
  },
};
</script>
<style>
:root {
  --green: #42b983;
  --primary: #2c3e50;
  --light-primary: rgba(44, 62, 80, .85);
  --background-menu: #794150;
  --background-main: #f0f0f0;
  --secondary: #e5e5e5;
  --light-green: #42b983cc;
  --red:#e92929;
  --light-red:rgba(233, 41, 41, .8);
  --text: #794150;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
}
.container-main {
  display: grid;
  height: 100vh;
  grid-template-columns: 75px auto;  /* 75px = width do menu lateral */
  grid-template-rows: 100%;
  grid-template-areas: "menu-lateral content";
}

</style>
