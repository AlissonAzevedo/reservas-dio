<template>
  <form @submit="createReservation">
    <div class="card-aside">
      <div class="containerInput">
        <select name="pessoa" id="pessoa" v-model="pessoa" required>
          <option value="">Selecione uma pessoa</option>
          <option v-for="user in pessoas" :key="user.id" :value="user.id">
            {{ user.nome }}
          </option>
        </select>
      </div>
      <div class="containerInput">
        <select name="chave" id="chave" v-model="chave" required>
          <option value="">Selecione uma chave</option>
          <option v-for="key in chaves" :key="key.id" :value="key.id">
            {{ key.numero }} - {{ key.nome }}
          </option>
        </select>
      </div>

      <button type="submit" class="btnAddReservation">Pegar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CardAside",
  data() {
    return {
      chave: "",
      pessoa: "",
      pessoas: null,
      chaves: null,
      baseUrl: process.env.VUE_APP_API_BASE_URL,
    };
  },
  created() {
    this.getKeys();
    this.getUsers();
  },
  methods: {
    async getKeys() {
      const req = await fetch(`${this.baseUrl}/chaves/`);
      const data = await req.json();
      this.chaves = data;
      // console.log(data);
    },
    async getUsers() {
      const req = await fetch(`${this.baseUrl}/pessoas/`);
      const data = await req.json();
      this.pessoas = data;
      // console.log(data);
    },
    async createReservation(e) {
      e.preventDefault();
      const data = {
        pessoas: this.pessoa,
        chaves: this.chave,
      };
      const dataJson = JSON.stringify(data);
      const req = await fetch(
        `${this.baseUrl}/reservas/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataJson,
        }
      );
      this.pessoa = "";
      this.chave = "";
      // const res = await req.json();
      // console.log(res);
      // console.log(dataJson);
    },
  },
};
</script>

<style scoped>
form {
  grid-area: CardAside;
}
.card-aside {
  background-color: #fff;
  border-radius: 8px;
  height: 350px;
  margin: 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.containerInput {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--secondary);
  border-radius: 6px;
  height: 40px;
  width: 90%;
  margin: 0 10px;
  padding: 8px;
}

input {
  border: none;
  background-color: transparent;
  color: #794150;
  outline: none;
  width: 100%;
}
select {
  outline: none;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #794150;
}

.btnAddReservation {
  color: #fff;
  background-color: var(--green);
  padding: 10px;
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 80%;
  cursor: pointer;
}
.btnAddReservation:hover {
  background-color: var(--light-green);
}

@media (max-width: 1340px) {
  .card-aside {
    width: 90%;
  }
  .containerInput {
    width: 80%;
    justify-content: center;
  }
  .SearchInput {
    width: 80%;
    font-size: 12px;
  }
  .SearchIcon {
    height: 16px;
    width: 16px;
  }
}
</style>