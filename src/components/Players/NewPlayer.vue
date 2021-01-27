<template>
    <base-form @submit.prevent="submitForm" form-title="New Player">    
        <div class="spaceQuestions">
            <label for="lolname"> Player name (LoL name): </label>
            <input @blur="clearValidity('lolname')" type="text" name="lolname" v-model="player.lolname.value">
            <p v-if="!player.lolname.isValid">Please enter a valid name.</p>
        </div>
        <div class="spaceQuestions">
            <label for="discordtag">Discord tag: </label>
            <input @blur="clearValidity('discordtag')" type="text" name="discordtag" v-model="player.discordtag.value">
            <p v-if="!player.discordtag.isValid">Please enter a valid discord tag.</p>
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
import Papa from 'papaparse'
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
            fileError: false,
            formIsValid: true
            
        }
    },
    methods: {
        clearValidity(input) {
            this.player[input].isValid = true;
        },
        async submitForm(){
            const playerFile = document.getElementById('playerFile');
            const fileList = playerFile.files;
            let playerList = [];
            if(fileList.length > 0){
                playerList = await this.parseCsv(fileList[0])
                if(this.fileError === true){
                    alert("One or more players were not uploaded due to missing fields.");
                }
            }
            else{
                this.validateForm()
                if(this.formIsValid === true){
                    let playerFormat = {
                        lolname: this.player.lolname.value,
                        discordtag: this.player.discordtag.value
                    }
                    playerList.push(playerFormat)
                }
            }
            if(playerList.length >= 1){
                 this.$store.dispatch('players/registerPlayer', playerList)
            }

        },

        parseCsv(file) {
            let vm = this;
            let playerList = [];
            let fileType = this.checkType(file.name)
            if(fileType){
                Papa.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    complete : function(results) {
                        results.data.forEach(player => {
                            let playerFormat = {
                                lolname: player.lolname,
                                discordtag: player.discordtag
                            }
                            if(player.lolname === "" || player.discordtag === ""){
                                vm.fileError = true
                            }
                            else{
                                playerList.push(playerFormat)
                            }
                        });
                        return playerList;
                    }
                })
            }
            else{
                alert("Not a valid file type. Please make sure you are uploading a csv file")
            }
        },

        validateForm(){
            this.formIsValid = true
            if(this.player.lolname.value === ''){
                this.player.lolname.isValid = false;
                this.formIsValid = false;

            }
            if(this.player.discordtag.value === ''){
                this.player.discordtag.isValid = false;
                this.formIsValid = false;
            }
        },

        checkType(file){
            let fileType = file.slice(-3)
            if(fileType === "csv"){
                return true;
            }
            else{
                return false;
            }
        }

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