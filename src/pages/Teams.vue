<template>
<div>
    <h1>Teams</h1>
    <base-button @click="newTeamWindow = true" button-type="circular">+</base-button>
    <new-team v-model="newTeamWindow" v-if="newTeamWindow"></new-team>
</div>
</template>

<script>
import NewTeam from '../components/Teams/NewTeam.vue'
export default {
  components: { NewTeam },
  data () {
      return {
          newTeamWindow: false,
      }
  }
    
}
</script>

<style scoped>
div {
    text-align: center;
}


</style>