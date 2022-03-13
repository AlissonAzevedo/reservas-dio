<template>
  <div class="card">
    <Table />
    <TableItem
      name="Alisson Azevedo"
      keys="140"
      delivered="13/03/2022 - 06:57"
      devolution="13/03/2022 - 12:07"
    />
    <TableItem name="João Amorim" />
    <TableItem name="Marcos Frazão" />
    <TableItem />
    <TableItem />
  </div>
</template>

<script>
import Table from "./Table";
import TableItem from "./Table/TableItem.vue";
export default {
  name: "KeyCard",
  components: {
    Table,
    TableItem,
  },
};
</script>

<style scoped>
.card {
  grid-area: KeyCard;
  background-color: #fff;
  border-radius: 8px;
}
</style>