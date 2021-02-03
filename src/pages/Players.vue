<template>
    <div>
        <h1>Players</h1>
        <base-button @click="changeFormState(true)" button-type="circular">+</base-button>
        <new-player @submit="loadPlayers" v-if="formStatus"></new-player>
        <div v-if="isLoading">
            <base-spinner></base-spinner>
        </div>
        <div v-else-if="!isLoading">
            <player-item v-for="player in players" :key="player.id" :id="player.id" :lolname="player.lolname" :discordtag="player.discordtag" ></player-item>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'


import NewPlayer from '../components/Players/NewPlayer.vue'
import PlayerItem from '../components/Players/PlayerItem.vue'
import BaseSpinner from '../components/UI/BaseSpinner.vue'
export default {
    data () {
        return {
           error: null,
           isLoading: true,
        }
    },
    components: {NewPlayer, PlayerItem, BaseSpinner},
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
            console.log("setting to false")
            this.isLoading = false;
        }
    },
    computed: {
        ...mapGetters({
            formStatus: 'formStatus',
            players: 'players/players'
        }),

    }
}
</script>
<style scoped>
div {
    text-align: center;
}
</style>
