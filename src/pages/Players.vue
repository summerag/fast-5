<template>
    <div>
        <h1>Players</h1>
        <base-button @click="changeFormState(true)" button-type="circular">+</base-button>
        <new-player v-if="formStatus"></new-player>
        <div v-if="isLoading">
            <base-spinner></base-spinner>
        </div>
        <div v-else-if="!isLoading">
            <base-card v-for="player in players" :key="player.id">
                <h1>{{ player.lolName }}</h1>
            </base-card>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'


import NewPlayer from '../components/Players/NewPlayer.vue'
export default {
    data () {
        return {
           error: null,
           isLoading: false,
        }
    },
    components: {NewPlayer},
    created(){
        this.loadPlayers();
    },
    methods: {
        ...mapActions({
            changeFormState: 'changeFormState',
            getPlayers: 'players/getPlayers'
        }),
        async loadPlayers(){
            this.isLoading = true;
            try {
                await this.getPlayers()
            }
            catch (error) {
                this.error = error.message
            }
            this.isLoading = false;
        }
    },
    computed: {
        ...mapGetters({
            formStatus: 'formStatus',
            players: 'players/players'
        })
    }
}
</script>
<style scoped>
div {
    text-align: center;
}
</style>
