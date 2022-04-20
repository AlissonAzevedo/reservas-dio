<template>
  <div class="container">
    <h1>Página em Manuteção</h1>

    <div class="msg">
      <img
        src="https://i.ibb.co/qDpFTjz/settings.png"
        alt="settings"
        border="0"
      />
    </div>
    <h3>
      Clique em
      <router-link to="/chaves">Chave</router-link>
      para visualizar a página de chaves.
    </h3>
  </div>
</template>

<script>
export default {
  name: "PainelView",
  mounted() {
    this.$router.push("/chaves");
  },
};
</script>
<style scoped>
.container {
  background-color: var(--background-main);
  display: grid;
  justify-content: center;
  align-content: center;
}
.msg {
  display: flex;
  justify-content: center;
  align-content: center;
}
.msg img {
  width: 250px;
  height: 250px;
}
h1 {
  font-size: 60px;
  color: var(--text);
  text-align: center;
  margin-bottom: 30px;
}
h3 {
  font-size: 20px;
  color: var(--text);
  text-align: center;
  margin-top: 30px;
}
</style>
