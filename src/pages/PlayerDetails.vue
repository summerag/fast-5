<template>
    <h1>{{id}}</h1>
</template>
<script>
export default {
    props: ['id'],
    data(){
        return {
            selectedPlayer: null,
        }
    },
    created(){

    }
}
</script>
<style scoped>

</style>