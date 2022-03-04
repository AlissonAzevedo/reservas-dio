<template>
  <div>
    <img :src="icon" :alt="alt" class="icon" >
  </div>
</template>

<script>
export default {
    name: "Icon",
    props:["icon", "alt"],
};
</script>

<style scoped>
.icon {
    width: 24px;
    height: 24px;
}
</style>