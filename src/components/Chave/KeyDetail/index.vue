<template>
  <div class="card">
    <form @submit="updateReservation">
      <div class="card-form">
        <div class="row-content">
          <div class="containerInput">
            <input type="text" v-model="primeiro_nome" placeholder="Nome" />
          </div>
          <div class="containerInput">
            <input type="text" v-model="ultimo_nome" placeholder="Sobrenome" />
          </div>
        </div>
        <div class="row-content">
          <div class="containerInput">
            <p>{{ data_reserva }}</p>
          </div>
          <div class="containerInput">
            <p>{{ data_devolucao }}</p>
          </div>
        </div>
      </div>
    </form>
    <button @click="returnReservation" class="btnReturnReservation">
      Devolver
    </button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "KeyDetail",
  data() {
    return {
      primeiro_nome: this.primeiro_nome,
      ultimo_nome: this.ultimo_nome,
      data_reserva: this.data_reserva,
      data_devolucao: this.data_devolucao,
      data_devolucao_local: moment().format('DD/MM/YYYY - H:mm'),
      id_reserva: this.$route.params.id,
    };
  },
  components: {},
  created() {
    this.getReservation();
  },
  methods: {
    async getReservation() {
      const req = await fetch(
        `http://127.0.0.1:8000/api/v1/reservas/${this.id_reserva}`
      );
      const data = await req.json();
      this.primeiro_nome = data.primeiro_nome;
      this.ultimo_nome = data.ultimo_nome;
      this.data_reserva = data.data_reserva_formatada;
      this.data_devolucao = data.data_devolucao_formatada;
    },
    async returnReservation() {
      this.data_devolucao = this.data_devolucao_local;
      const dataJson = JSON.stringify({data_devolucao: this.data_devolucao});
      const req = await fetch(
        `http://127.0.0.1:8000/api/v1/reservas/${this.id_reserva}/`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataJson,
        });
      console.log(dataJson);
    },
  },
};
</script>

<style scoped>
.card {
  grid-area: KeyCard;
  background-color: #fff;
  border-radius: 8px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

form {
  width: 80%;
}
.card-form {
  border-radius: 8px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.row-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.containerInput {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--secondary);
  border-radius: 6px;
  height: 40px;
  width: 60%;
  margin: 0 10px;
  padding: 8px;
}

input {
  border: none;
  background-color: transparent;
  color: var(--text);
  outline: none;
  width: 100%;
}
p {
  color: var(--text);
}
.btnReturnReservation {
  color: #fff;
  background-color: var(--red);
  padding: 10px;
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 30%;
  cursor: pointer;
}
.btnReturnReservation:hover {
  background-color: var(--light-red);
}
</style>