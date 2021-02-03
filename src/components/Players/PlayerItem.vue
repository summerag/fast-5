<template>
<router-link :to="playerDetailsLink">
    <base-card  >
        <h1>{{ lolname }}</h1>
    </base-card>
</router-link>
</template>
<script>
export default {
    props:['id', 'lolname', 'discordtag'],
    
    computed: {
        playerDetailsLink() {
            return this.$route.path + '/' + this.id;
        },
    }
}
</script>
<style scoped>

</style>
