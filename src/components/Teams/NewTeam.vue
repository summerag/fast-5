<template>
   <div class="form-container" :class="modelValue  ? 'show-form' : 'hide-form'">
       <h1>New Team</h1>
       <base-card class="form">
            <form>
                <div>
                    <label for="teamname"> Team Name:</label>
                    <input type="text" name="teamname">
                </div>
                <div>
                    <label for="teamorigin">Who's Team:</label>
                    <select name="teamorigin">
                        <option value="fast5">A Fast-5 Team</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <base-button>Add Player</base-button>
                </div>
                <base-button>Submit</base-button>
            </form>
       </base-card>
   </div>
</template>
<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        formClose(option) {
            console.log(this.modelValue)
            this.$emit('update:modelValue', option)
        },
    }

}
</script>



<style scoped>

div{
    padding: 10px;
    text-align: left;
}

.show-form {
    display: block;
}

.hide-form {
    display: none;
}
.form-container {
  z-index: 3;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, .9);
}


.form {

}
</style>