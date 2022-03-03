<template>
    <div class="container">
        <router-link class="link" to="/salas">
            <LivingRoomIcon :size="24"/>
            <p>SALAS</p>       
        </router-link>

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
.container .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
}

.container:hover {
    background: rgba(255, 255, 255, 0.2);
}

</style>