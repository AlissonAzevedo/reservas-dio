<template>
  <div class="table-item">
    <ul>
      <li>{{ name }}</li>
      <li>
        <KeyIcon />
        {{ keys }}
      </li>
      <li>{{ delivered }}</li>
      <li>{{ devolution }}</li>
      <li>
        <router-link :to="route_path">
          <EditIcon />
        </router-link>
      </li>
      <li><RemoveIcon @click="deleteReservation"/></li>
    </ul>
  </div>
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
  methods: {
    deleteReservation(id) {
      // console.log("delete");
      this.$emit("delete-reservation", this.id);
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
  width: 135px;
}
li:nth-child(2) {
  width: 50px;
  margin-left: -15px;
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
</style>