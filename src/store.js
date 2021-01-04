import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            formOpen: false
        }
    },
    mutations: {
        formState(state, payload){
            state.formOpen = payload;
            console.log(state)
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