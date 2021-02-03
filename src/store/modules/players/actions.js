import { db } from '../../../firebaseConfig.js';

const playerCollection = db.collection('players');


export default {

    async getPlayers(context) {
        const players = [];
        return playerCollection.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const player = {
                    id: doc.id,
                    lolname: doc.data().lolname,
                    discordtag: doc.data().discordtag
                }
                players.push(player);
            })
            context.commit('setPlayers', players);
        })
    },
    async registerPlayer(context, payload){
        let batch = db.batch();
        console.log(context)
        payload.forEach((doc) => {
            let newPlayerRef = playerCollection.doc();
            batch.set(newPlayerRef, doc)
        })
        batch.commit().then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        context.dispatch('changeFormState', false, {root: true})
    }
}