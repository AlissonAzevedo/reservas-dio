<template>
  <div class="container-card">
    <div id="container-key">
      <KeyDetail />
    </div>
  </div>
</template>

<script>
import KeyDetail from "@/components/Chave/KeyDetail";

export default {
  name: "ChaveView",
  components: {
    KeyDetail,
  },
};
</script>

<style scoped>
#container-key {
  display: grid;
  height: 100vh;
  grid-template-columns: 70vw 20vw;
  grid-template-rows: 70px 85vh;
  grid-template-areas:
    "SearchField SearchField "
    "KeyCard CardAside";
}
.container-card {
  background-color: var(--background-main);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
