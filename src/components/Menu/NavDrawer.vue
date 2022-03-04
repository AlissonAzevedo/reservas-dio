<template>
  <div class="menu-lateral">   
        <DrawerItem icon_src="img/painel.svg" selected name="painel"/> 
        <DrawerItem icon_src="img/chave.svg" name="chave"/>
        <DrawerItem icon_src="img/sala.svg" name="sala"/>
        <DrawerItem icon_src="img/tablet.svg" name="tablet"/>
        <DrawerItem icon_src="img/laptop.svg" name="laptop"/>
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
*{
    font-size: 12px;
}
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