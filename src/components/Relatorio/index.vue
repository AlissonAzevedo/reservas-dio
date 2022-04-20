<template>
    <div class="card">
        <div class="btnImprimir">
            <button @click="generatePDF">Imprimir</button>
        </div>
        <table id="reports-table">
            <tr class="tableHeader">
                <th>Nome</th>
                <th>Cargo</th>
                <th>Reserva</th>
                <th>Data Reserva</th>
                <th>Data Devolução</th>
            </tr>
            <tr v-for="report in reports" :key="report.id">
                <td>{{report.pessoa.nome}}</td>
                <td>{{report.pessoa.cargo}}</td>
                <td>{{report.chave.numero}} - {{report.chave.nome}}</td>
                <td>{{report.data_reserva_formatada}}</td>
                <td>{{report.data_devolucao_formatada}}</td>
            </tr>
        </table>
    </div>

</template>

<script>
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
export default {
    name:'Relatorio',
    data(){
        return{
            reports: null,
            reportsPDF:[],
            baseUrl: process.env.VUE_APP_API_RELATORIO,
        }
    },
    created() {
        this.getReports();
    },
    methods: {
        async getReports() {
            const req = await fetch(`${this.baseUrl}/reservas/`);
            const data = await req.json();
            this.reports = data;
            this.reports.forEach((report) => {
                if (
                report.data_devolucao_formatada ===
                report.data_reserva_formatada
                ) {
                report.data_devolucao_formatada = "Não devolvido";
                }
            });
        },
        generatePDF(){
            this.reportsPDF = this.reports;
            const doc = new jsPDF();
            autoTable(doc, { html: '#reports-table' })
            doc.save("a4.pdf");
        }
    },
}
</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;

}
table{
    border-collapse: collapse;
}
td{
    border: 1px solid black;
    padding: 10px;
    color: var(--text);
}
.tableHeader{
    background-color: #f5f5f5;
    align-items: center;
    border: 1px solid black;
}
.btnImprimir{
    margin: 30px 0px;
}
button{
    padding: 10px;
    background-color: var(--green);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
}
button:houver{
    background-color: var(--light-green);
}
</style>