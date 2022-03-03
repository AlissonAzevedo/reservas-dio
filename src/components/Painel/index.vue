<template>
    <div class="container">
        <PainelIcon :size="24"/>
        <p>PAINEL</p>
    </div>
</template>

<script>
import PainelIcon from 'vue-material-design-icons/HomeVariantOutline'
export default {
  name: "Painel",
  components: {
    PainelIcon,
  },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.container:hover {
    background: rgba(255, 255, 255, 0.2);
}
</style>