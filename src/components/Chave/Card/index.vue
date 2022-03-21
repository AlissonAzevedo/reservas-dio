<template>
  <div class="card">
    <Table />
    <div class="items">
      <!-- <TableItem
        name="Alisson Azevedo"
        keys="140"
        delivered="13/03/2022 - 06:57"
        devolution="13/03/2022 - 12:07"
        :route_path="`/chaves/${id}`"
      /> -->
      <TableItem
        v-for="reserva in reservas"
        :key="reserva.id"
        :name="reserva.primeiro_nome + ' ' + reserva.ultimo_nome"
        :keys="reserva.chave.numero"
        :delivered="reserva.data_reserva_formatada"
        :devolution="reserva.data_devolucao"
        :route_path="`/chaves/${reserva.id}`"
      />
    </div>
  </div>
</template>

<script>
import Table from "./Table";
import TableItem from "./Table/TableItem";
export default {
  name: "KeyCard",
  data() {
    return {
      id: 1,
      reservas: null,
    };
  },
  components: {
    Table,
    TableItem,
  },
  created() {
    this.getReservations();
  },
  methods: {
    async getReservations() {
      const req = await fetch("http://127.0.0.1:8000/api/v1/reservas/");
      const data = await req.json();
      this.reservas = data;
      // console.log(data);
      setTimeout(() => {
        this.getReservations();
      }, 2000);
    },
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