<template>
  <div class="card-aside">
    <div class="containerInput">
      <input type="text" v-model="first_name" placeholder="Nome" />
    </div>
    <div class="containerInput">
      <input type="text" v-model="last_name" placeholder="Sobrenome" />
    </div>
    <div class="containerInput">
      <select name="key" id="key" v-model="key">
        <option value="">Selecione uma chave</option>
        <option value="140">140</option>
        <option value="039">039</option>
        <option value="056">056</option>
      </select>
    </div>

    <button @click="OpenModal" class="btnAddReservation">Pegar</button>
    <button class="btnDevolution">Devolver</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeModal: false,
    };
  },
  methods: {
    OpenModal() {
      this.activeModal = true;
    },
  },
};
</script>

<style scoped>
.card-aside {
  grid-area: CardAside;
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
  width: 80%;
  margin: 0 20px;
  padding: 8px;
}

input {
  border: none;
  background-color: transparent;
  color: #794150;
  outline: none;
}
select {
  outline: none;
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

.btnDevolution {
  color: #fff;
  background-color: var(--red);
  padding: 10px;
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 80%;
  cursor: pointer;
}
@media (max-width: 1340px) {
  .card-aside {
    width: 90%;
  }
  .containerInput {
    width: 70%;
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