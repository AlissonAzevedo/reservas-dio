<template>
  <div id="container-key">
    <KeyCard />
  </div>
</template>

<script>
import KeyCard from '@/components/Chave/Card';
export default {
  name: "ChaveView",
  components: {
    KeyCard,
  },
}
</script>

<style scoped>
#container-key {
  display: grid;
  height: 100vh;
  padding: 0 2rem;
  grid-template-columns: auto 140px;
  grid-template-rows: 70px 250px 250px;
  grid-template-areas:"SearchField SearchField SearchField"
                      "KeyCard KeyCard CardAside"
                      "KeyCard KeyCard CardAside";
  background-color: var(--background-main);
}
</style>
