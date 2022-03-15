<template>
  <div class="card-aside">
    <div class="containerInput">
      <input class="SearchInput" type="text" placeholder="Digite uma chave">
      <button class="SearchIcon">
        <SearchIcon />
      </button>
    </div>
    <button class="btnAddReservation">
        Adicionar Reserva
      </button>
  </div>
</template>

<script>
import SearchIcon from "./SearchIcon";
export default {
  components: {
    SearchIcon
  },
};
</script>

<style scoped>
.card-aside {
  grid-area: CardAside;
  background-color: #fff;
  border-radius: 8px;
  height: 250px;
  margin: 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.containerInput{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: var(--secondary);
  border-radius: 6px;
  height: 40px;
  width: 80%;
  margin: 0 20px;
  padding: 8px;
}
.SearchInput {
  border: none;
  background-color: transparent;
  color: #794150;
  outline: none;
}
.SearchIcon{
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 2px;
}
.SearchIcon:hover{
  transform: scale(1.3);
}


.btnAddReservation {
  color: #fff;
  background-color: rgba(66, 185, 131, .8);
  padding: 10px;
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 80%;
  cursor: pointer;
}
.btnAddReservation:hover{
  background-color: var(--green);
}
@media(max-width: 1340px){
  .card-aside{
    width: 90%;
  }
  .containerInput{
    width: 70%;
    justify-content: center;
  }
  .SearchInput{
    width: 80%;
    font-size: 12px;
  }
  .SearchIcon{
    height: 16px;
    width: 16px;
  }
}
</style>