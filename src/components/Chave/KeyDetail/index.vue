<template>
  <div class="card">
    <div class="card-form">
      <div class="content-button-return">
        <button @click="returnPage" class="btnReturnPage">
          <img :src="iconVoltar" alt="voltar" />
          Voltar
        </button>
      </div>
      <div class="content-form">
        <div class="row-content">
          <h4>Nome:</h4>
          <div class="containerInput">
            <p>{{ nome }}</p>
          </div>
        </div>

        <div class="row-content">
          <h4>Data Reserva:</h4>
          <div class="containerInput">
            <p>{{ data_reserva }}</p>
          </div>
        </div>
        <div class="row-content">
          <h4>Data Devolução:</h4>
          <div class="containerInput">
            <p>{{ data_devolucao }}</p>
          </div>
        </div>
      </div>

      <div class="content-button-devolution">
        <button @click="returnReservation" class="btnReturnReservation">
          Devolver
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import iconVoltar from "../../../../public/icon/icon-voltar.svg";
export default {
  name: "KeyDetail",
  data() {
    return {
      iconVoltar: iconVoltar,
      nome: this.nome,
      data_reserva: this.data_reserva,
      data_devolucao: this.data_devolucao,
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
        `https://api-pega.herokuapp.com/api/v1/reservas/${this.id_reserva}`
      );
      const data = await req.json();
      this.nome = data.pessoa.nome;
      this.data_reserva = data.data_reserva_formatada;
      this.data_devolucao = data.data_devolucao_formatada;
      if(this.data_devolucao === this.data_reserva){
        this.data_devolucao = "Não devolvido";
      }
    },
    async returnReservation() {
      // validates if it was returned, if yes, issue an alert of Reservation already returned if the reservation is not returned
      if (this.data_devolucao === "Não devolvido") {
        const dataJson = JSON.stringify({
          devolvido: true,
        });
        const req = await fetch(
        `https://api-pega.herokuapp.com/api/v1/reservas/${this.id_reserva}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataJson,
        }
        );
        setTimeout(() => {
          this.$router.push("/chaves");
        }, 1000);
        
      } else {
        alert("Reserva já devolvida");
      }
      // console.log(dataJson);
    },
    returnPage() {
      this.$router.push("/chaves");
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
  justify-content: center;
  align-items: center;
}

.card-form {
  border-radius: 8px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
}
.content-button-return {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
}
.btnReturnPage {
  color: #fff;
  background-color: var(--primary);
  padding: 5px;
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 90px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
}
.btnReturnPage img {
  width: 30px;
  height: 30px;
}
.btnReturnPage:hover {
  background-color: var(--light-primary);
}
.content-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70%;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(240, 240, 240, 0.4);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}
.row-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
h4 {
  margin-right: 20px;
  color: var(--text);
}
.containerInput {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--secondary);
  border-radius: 6px;
  height: 40px;
  margin: 0 10px;
  padding: 8px;
  width: 80%;
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
.content-button-devolution {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
}
.btnReturnReservation {
  color: #fff;
  background-color: var(--red);
  padding: 10px;
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 300px;
  cursor: pointer;
  margin-top: 20px;
}
.btnReturnReservation:hover {
  background-color: var(--light-red);
}
</style>