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
  --background-menu: #794150;
  --background-main: #f0f0f0;
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
  grid-template-columns: 70px auto;  /* 70px = width do menu lateral */
  grid-template-rows: 100%;
  grid-template-areas: "menu-lateral content";
}

</style>
