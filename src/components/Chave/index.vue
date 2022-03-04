<template>
    <div class="container">
        <router-link class="link" to="/chaves">
            <div class="icon">
                <KeyIcon :size="24"/>
            </div>
            <p>CHAVE</p>      
        </router-link>

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

.container{
    height:60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
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
.icon{
    transform:rotateY(180deg);   
}
</style>