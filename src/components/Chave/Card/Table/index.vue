<template>
    <div class="table-header">
        <ul>
            <li>Nome</li>
            <li>Reserva</li>
            <li>Entrega</li>
            <li>Devolução</li>
        </ul>
    </div>
</template>

<script>
    export default {
       name: "Table", 
    }
</script>

<style scoped>
ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
}

li{
    list-style: none;
    
}
</style>