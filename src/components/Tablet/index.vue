<template> 
    <div class="container">
        <router-link class="link" to="/tablets">
            <CellPhoneIcon :size="24"/>
            <p>TABLETS</p>
        </router-link>
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