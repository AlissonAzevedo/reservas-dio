<template>
  <div class="card">
    <Table />
    <div class="items">
      <TableItem
        name="Alisson Azevedo"
        keys="140"
        delivered="13/03/2022 - 06:57"
        devolution="13/03/2022 - 12:07"
      />
      <TableItem name="João Amorim" keys="029" />
      <TableItem name="Marcos Frazão" keys="054" devolution="" />
      <TableItem name="Renata Cardoso" devolution=""/>
      <TableItem devolution="" />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
    </div>
  </div>
</template>

<script>
import Table from "./Table";
import TableItem from "./Table/TableItem";
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
  overflow: scroll;
  overflow-x: hidden !important;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}
.card::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
  border-radius: 8px;
}
.card::-webkit-scrollbar-thumb {
  background-color: #e5e5e5;
  border-radius: 6px;
}
</style>