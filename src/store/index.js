import { createStore } from 'vuex';

import playersModule from './modules/players/index.js'
import teamsModule from './modules/teams/index.js'

const store = createStore({
    modules: {
        players: playersModule,
        teams: teamsModule
    },
    state() {
        return {
            formOpen: false
        }
    },
    mutations: {
        formState(state, payload){
            state.formOpen = payload;
        }
    },
    getters: {
        formStatus (state){
            return state.formOpen;
        }
    },
    actions: {
        changeFormState(context, payload){
            context.commit('formState', payload)
        }
    }
});

export default store;