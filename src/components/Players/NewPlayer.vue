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
</template>import { csv-parse } from 'csv';
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
            playerList: [],
            fileUpload: false,
            fileError: false,
            formIsValid: true
            
        }
    },
    methods: {
        clearValidity(input) {
            this.player[input].isValid = true;
        },
        submitForm(){
            this.compileData()
            if(this.formIsValid === false || this.playerList.length === 0){
                return;
            }

        },

        compileData () {
            const playerFile = document.getElementById('playerFile');
            const fileList = playerFile.files;
            if(fileList.length > 0){
                this.fileUpload = true;
                this.parseCsv(fileList[0]);
                if(this.fileError === true){
                    alert("One or more players were not uploaded due to missing fields.");
                }
            }
            else {
                this.fileUpload = false;
                this.validateForm()
                this.playerList.push(this.player);
            }
        },

        parseCsv(file) {
            var vm = this;
            if(file.type === "text/csv"){
                Papa.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    complete : function(results) {
                        results.data.forEach(player => {
                            var playerFormat = {
                                lolname: player.lolname,
                                discordtag: player.discordtag
                            }
                            if(player.lolname === "" || player.discordtag === ""){
                                vm.fileError = true
                            }
                            vm.playerList.push(playerFormat)
                        });
                    }
                })
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