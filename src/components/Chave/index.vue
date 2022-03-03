<template>
    <div class="container">
        <div class="icon">
            <KeyIcon :size="24"/>
        </div>
        <p>CHAVE</p>
    </div>
</template>

<script>
import KeyIcon from 'vue-material-design-icons/KeyVariant'
export default {
    name: "Chave",
    components: {
        KeyIcon,
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
.icon{
    transform:rotateY(180deg);
}
</style>