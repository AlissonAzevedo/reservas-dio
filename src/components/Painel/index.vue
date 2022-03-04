<template>
  <div class="container">
    <router-link class="link" to="/">
      <PainelIcon :size="24" />
      <p>PAINEL</p>
    </router-link>
  </div>
</template>

<script>
import PainelIcon from "vue-material-design-icons/HomeVariantOutline";
export default {
  name: "Painel",
  components: {
    PainelIcon,
  },
};
</script>

<style scoped>
.container{
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
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