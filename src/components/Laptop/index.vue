<template>
  <div class="container">
    <router-link class="link" to="/laptops">
      <LaptopIcon :size="24" />
      <p>LAPTOPS</p>
    </router-link>
  </div>
</template>

<script>
import LaptopIcon from "vue-material-design-icons/Laptop";
export default {
  name: "Laptop",
  components: {
    LaptopIcon,
  },
};
</script>

<style scoped>
.container .link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}

.container:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>