<template>
    <div class="card">
        <Table />
        <TableItem />
        <TableItem />
        <TableItem />
    </div>
</template>

<script>
import Table from './Table'
import TableItem from './Table/TableItem.vue'
export default {
    name: 'KeyCard',
    components: {
        Table,
        TableItem
    },
}
</script>

<style scoped>
.card{
    grid-area: KeyCard;
    background-color: #fff;
    border-radius: 8px;
}
</style>