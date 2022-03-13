<template>
  <div>
    <img src="icon/icon_remove.svg" alt="remove" class="icon" >
  </div>
</template>

<script>
export default {
    name: "Icon",
};
</script>

<style scoped>
.icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
}
.icon:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
}
</style>