<template>
  <div class="container-input">
    <div class="contentInput">
      <input class="SearchInput" type="text" placeholder="Digite uma chave" />
      <button class="SearchIcon">
        <SearchIcon />
      </button>
    </div>
  </div>
</template>

<script>
import SearchIcon from "./SearchIcon";
export default {
  name: "SearchInput",
  components: {
    SearchIcon,
  },
};
</script>

<style scoped>
.container-input {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
}
.contentInput {
  grid-area: SearchField;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: var(--secondary);
  border-radius: 6px;
  height: 40px;
  width: 250px;
  margin: 0 20px;
  padding: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.SearchInput {
  border: none;
  background-color: transparent;
  color: var(--text);
  outline: none;
}
.SearchIcon {
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 2px;
}
.SearchIcon:hover {
  transform: scale(1.3);
}
</style>