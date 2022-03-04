<template>
  <div class="menu-lateral">   
        <DrawerItem icon_src="img/painel.svg" router_item="/" selected name="painel"/> 
        <DrawerItem icon_src="img/chave.svg" router_item="/chaves" name="chave"/>
        <DrawerItem icon_src="img/sala.svg" router_item="/salas" name="sala"/>
        <DrawerItem icon_src="img/tablet.svg" router_item="/tablets" name="tablet"/>
        <DrawerItem icon_src="img/laptop.svg" router_item="/laptops" name="laptop"/>
  </div>
</template>

<script>
import DrawerItem from '@/components/Menu/DrawerItem';

export default {
  name: "MenuLateral",
  components: {
    DrawerItem,
  },
};
</script>

<style scoped>

.menu-lateral {
    grid-area: menu-lateral;
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    background: var(--background-menu);
    color: #fff;
    padding: 70px 0;
}

</style>