<template>
    <div class="table-item">
        <ul>
            <li>Alisson da Silva Azevedo</li>
            <li>140,143</li>
            <li>23/02/2002 - 06:57</li>
            <li>23/02/2002 - 12:02</li>
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
    justify-content: space-around;
    margin-top: 10px;
    background-color:#E5E5E5;
    border-radius: 8px;
    height: 60px;
    margin: 5px 15px;
}

ul:hover{
    background: rgba(0, 0, 0, 0.15);
}

li{
    list-style: none;
    color: #794150;
    
}
</style>