import { playerCollection } from '../../../firebaseConfig.js'

export default {
    async getPlayers(context) {
        const players = []
        playerCollection.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const player = {
                    id: doc.id,
                    lolName: doc.data().lolname,
                    discordTag: doc.data().discordtag
                }
                players.push(player)
            })
            context.commit('setPlayers', players)
        })
    }
}