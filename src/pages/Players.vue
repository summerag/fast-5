<template>
    <div>
        <h1>Players</h1>
        <base-button @click="changeFormState(true)" button-type="circular">+</base-button>
        <new-player v-if="formStatus"></new-player>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'


import NewPlayer from '../components/Players/NewPlayer.vue'
export default {
    data () {
        return {
           
        }
    },
    components: {NewPlayer},
    methods: {
        ...mapActions(['changeFormState']),
    },
    computed: {
        ...mapGetters(['formStatus'])
    }
}
</script>
<style scoped>
div {
    text-align: center;
}
</style>
