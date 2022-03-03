<template>
    <div class="container">
        <CellPhoneIcon :size="24"/>
        <p>TABLETS</p>
    </div>
</template>

<script>
import CellPhoneIcon from 'vue-material-design-icons/Cellphone'
export default {
    name: "Sala",
    components: {
        CellPhoneIcon,
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