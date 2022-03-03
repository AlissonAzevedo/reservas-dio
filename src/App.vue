<template>
  <div class="container">
    <div>
      <MenuLateral />
    </div>
    <router-view />
  </div>
</template>
<script>
import MenuLateral from "./components/MenuLateral.vue";
export default {
  name: "App",
  components: {
    MenuLateral,
  },
};
</script>
<style>
:root {
  --green: #42b983;
  --primary: #2c3e50;
  --background-menu: #794150;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
}
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 80px auto;  /* 80px = width do menu lateral */
  grid-template-rows: 100%;
  grid-template-areas: "menu-lateral content";
}

</style>
