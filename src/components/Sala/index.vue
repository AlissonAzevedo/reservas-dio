<template>
    <div class="container">
        <LivingRoomIcon :size="24"/>
        <p>SALAS</p>
    </div>
</template>

<script>
import LivingRoomIcon from 'vue-material-design-icons/DoorOpen'
export default {
    name: "Sala",
    components: {
        LivingRoomIcon,
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