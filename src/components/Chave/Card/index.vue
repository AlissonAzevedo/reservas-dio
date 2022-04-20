<template>
  <div class="card">
    <Table />
    <img
      class="imgUpdate"
      :class="{ 'active': isActive }"
      @click="updateReservations"
      src="icon/update.svg"
      alt="update resevations"
    />
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
        :name="reserva.pessoa.nome"
        :keys="reserva.chave.numero"
        :tooltiptext="reserva.chave.nome"
        :delivered="reserva.data_reserva_formatada"
        :devolution="reserva.data_devolucao_formatada"
        :route_path="`/chaves/${reserva.id}/`"
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
      isActive: false,
      reservas: null,
      baseUrl: process.env.VUE_APP_API_BASE_URL,
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
      const req = await fetch(`${this.baseUrl}/reservas/`);
      const data = await req.json();
      this.reservas = data;
      // for every reservation where formatted_devolution_date equals formatted_reservation_date, formatted_devolution_date will be equal to Not Returned
      this.reservas.forEach((reserva) => {
        if (
          reserva.data_devolucao_formatada ===
          reserva.data_reserva_formatada
        ) {
          reserva.data_devolucao_formatada = "Não devolvido";
        }
      });
      setInterval(() => {
        this.getReservations();
      }, 30000);
    },
    updateReservations() {
      setTimeout(() => {
        this.isActive = true;
        this.getReservations();
      },500);
      this.isActive = false;
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

.imgUpdate {
  position: relative;
  right: -66vw;
  top: -10px;
  cursor: pointer;
  display: block;
}

.active {
  position: relative;
  right: -66vw;
  top: -10px;
  cursor: pointer;
  display: block;
  animation: loading 2s linear;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>