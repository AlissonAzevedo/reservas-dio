<template>
  <router-link :to="route_path">
    <div class="table-item">
    <ul>
      <li>{{ name.slice(0,20)}}...
        <span class="tooltiptext">{{ name }}</span>
      </li>
      <li>
        <KeyIcon />
        {{ keys }}
        <span class="tooltiptext">{{ tooltiptext }}</span>
      </li>
      <li>{{ delivered }}</li>
      <li>{{ devolution }}</li>
    </ul>
    </div>
  </router-link>
</template>

<script>
import KeyIcon from "./Icons/KeyIcon.vue";
import EditIcon from "./Icons/EditIcon.vue";
import RemoveIcon from "./Icons/RemoveIcon.vue";
export default {
  name: "Table",
  components: {
    KeyIcon,
    EditIcon,
    RemoveIcon,
  },
  props: {
    name: {
      type: String,
      default: "Fulano de Tal",
    },
    keys: {
      type: String,
      default: "001",
    },
    tooltiptext: {
      type: String,
      default: "",
    },
    delivered: {
      type: String,
      default: "01/01/2001 - 06:57",
    },
    devolution: {
      type: String,
      default: "01/01/2001 - 12:02",
    },
    route_path: {
      type: String,
      default: "",
    },
  },
  
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  background-color: var(--secondary);
  border-radius: 8px;
  height: 60px;
  margin: 5px 15px;
}

ul:hover {
  background: rgba(0, 0, 0, 0.15);
}

li {
  list-style: none;
  color: #794150;
  display: flex;
  flex-direction: row;
}
li:first-child {
  width: 165px;
  margin-left: -15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
li:nth-child(2) {
  width: 50px;
  margin-left: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
li:nth-child(3),
li:nth-child(4) {
  width: 160px;
}
li:nth-child(5) {
  width: 18px;
  margin-right: -20px;
}
li:nth-child(6) {
  width: 18px;
  margin-left: -20px;
}
li:first-child .tooltiptext {
  visibility: hidden;
  width: 165px;
  height: 40px;
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  font-size: 12px;
  position: absolute;
  z-index: 1;
}

li:first-child:hover .tooltiptext {
  visibility: visible;
}
li:nth-child(2) .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  font-size: 12px;
  position: absolute;
  z-index: 1;
}

li:nth-child(2):hover .tooltiptext {
  visibility: visible;
}
</style>