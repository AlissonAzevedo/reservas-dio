<template>
    <div class="container">
        <LaptopIcon :size="24"/>
        <p>LAPTOPS</p>
    </div>
</template>

<script>
import LaptopIcon from 'vue-material-design-icons/Laptop'
export default {
    name: "Laptop",
    components: {
        LaptopIcon,
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