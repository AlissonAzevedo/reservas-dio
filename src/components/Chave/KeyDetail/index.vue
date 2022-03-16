<template>
  <div class="card">
  </div>
</template>

<script>

export default {
  name: "KeyDetail",
  data() {
    return {
    };
  },
  components: {},
};
</script>

<style scoped>
.card {
  grid-area: KeyCard;
  background-color: #fff;
  border-radius: 8px;
  overflow: scroll;
  overflow-x: hidden !important;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}
.card::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
  border-radius: 8px;
}
.card::-webkit-scrollbar-thumb {
  background-color: #e5e5e5;
  border-radius: 6px;
}
</style>