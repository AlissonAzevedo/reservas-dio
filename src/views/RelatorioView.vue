<template>
    <div class="containerReports">
        <Relatorio/>
    </div>
</template>

<script>
import Relatorio from '@/components/Relatorio'
export default {
    name: "RelatorioView",
    components: {
        Relatorio,
    },
}
</script>

<style scoped>
.containerReports{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
</style>