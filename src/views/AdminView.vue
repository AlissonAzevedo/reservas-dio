<template>
    <div>

    </div>
</template>

<script>
export default {
    created(){
        this.redirectAdmin();
    },
    methods:{
        redirectAdmin(){
            window.open('https://api-pega.herokuapp.com/admin/login/?next=/admin/', '_blank');
            setTimeout(() => {
                this.$router.push('/chaves');
            }, 500);
        },
 
    }
}
</script>

<style scoped>

</style>