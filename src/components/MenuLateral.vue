<template>
  <div class="menu-lateral">   
        <Painel />
        <Chave />
        <Sala />
        <Tablet />
        <Laptop />
  </div>
</template>

<script>
import Painel from '@/components/Painel';
import Chave from '@/components/Chave';
import Sala from '@/components/Sala';
import Tablet from '@/components/Tablet';
import Laptop from '@/components/Laptop';
export default {
  name: "MenuLateral",
  components: {
    Painel,
    Chave,
    Sala,
    Tablet,
    Laptop,
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
    width: 80px;
    background: var(--background-menu);
    color: #fff;
    padding: 60px 0;
}

</style>