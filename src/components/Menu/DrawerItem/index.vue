<template>
  <div
    @click="ToggleMenu"
    class="container"
    v-bind:class="{ active: IsActive }"
  >
    <router-link class="link" :to="router_item">
      <Icon :icon="icon_src" :alt="icon_name" />
      <p>{{ name }}</p>
    </router-link>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "DrawerItem",
  components: {
    Icon,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    router_item: {
      type: String,
      default: "",
    },
    icon_src: {},
  },
  data() {
    return {
      icon_name: this.nome,
      IsActive: false,
    };
  },
  methods: {
    ToggleMenu() {
      this.IsActive = !this.IsActive;
    },
  },
};
</script>


<style scoped>
p {
  font-size: 12px;
  text-transform: uppercase;
}
.container {
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.container .link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}

.container:hover {
  background: rgba(0, 0, 0, 0.1);
}

.active {
  box-sizing: border-box;
  border: 3.7px solid #fff;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: solid;
  margin-left: 2px;
  background: rgba(255, 255, 255, 0.05);
}
</style>