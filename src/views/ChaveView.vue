<template>
  <div class="container-card">
    <div id="container-key">
      <SearchInput />
      <KeyCard />
      <CardAside />
    </div>
  </div>
</template>

<script>
import KeyCard from "@/components/Chave/Card";
import CardAside from "@/components/Chave/CardAside";
import SearchInput from "@/components/Chave/SearchInput";
export default {
  name: "ChaveView",
  components: {
    KeyCard,
    CardAside,
    SearchInput,
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
