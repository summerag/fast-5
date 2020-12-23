<template>
    <div>
        <h1>Players</h1>
        <base-button @click="changeFormState(true)" button-type="circular">+</base-button>
        <new-player v-model="newPlayerWindow"></new-player>
    </div>
</template>
<script>
import { mapActions } from 'vuex'


import NewPlayer from '../components/Players/NewPlayer.vue'
export default {
    components: {NewPlayer},
    methods: {
        ...mapActions(['changeFormState'])
    }
}
</script>
<style scoped>
div {
    text-align: center;
}
</style>
