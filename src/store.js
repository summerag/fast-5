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
        }
    },
    getters: {
        formStatus (state){
            return state.formState;
        }
    },
    actions: {
        changeFormState(context, payload){
            context.commit('formState', payload)
        }
    }
});

export default store;