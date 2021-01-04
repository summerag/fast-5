<template>
    <base-form @submit.prevent="submitForm" form-title="New Player">    
        <div class="spaceQuestions">
            <label for="lolname"> Player name (LoL name): </label>
            <input type="text" name="lolname" v-model="player.lolname.value">
        </div>
        <div class="spaceQuestions">
            <label for="discordtag">Discord tag: </label>
            <input type="text" name="discordtag" v-model="player.discordtag.value">
        </div>
        <div class="spaceQuestions">
            <label for="playersFromFile">Upload Players from file: </label>
            <input type="file" id="playerFile" name="playersFromFile" single>
        </div>
        <div class="submit">
            <base-button button-type="base">Submit</base-button>
        </div>
    </base-form>
</template>
<script>
export default {
    data () {
        return {
            player:{
                lolname: {
                    value: '',
                    isValid: true
                },
                discordtag: {
                    value:'',
                    isValid: true
                }
            },
            

        }
    },
    methods: {
        submitForm () {
        var playerFile = document.getElementById('playerFile');
        if(playerFile.files.length > 0){
            //do somethin
        }
        else {
            //do something
        }
        },
      

    }
}
</script>
<style scoped>
.spaceQuestions {
    margin: 10px;
    
}
.submit {
    text-align: center;
}
</style>