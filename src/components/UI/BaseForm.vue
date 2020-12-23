<template>
    <div class="form-container" :class="modelValue ? 'show-form' : 'hide-form'">
        <base-button @click="changeFormState(false)" button-type="circular">x</base-button>
        <h1>{{FormTitle}}</h1>
        <base-card>
            <base-card>
                <form>
                    <slot></slot>
                </form>
            </base-card>
        </base-card>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {



    methods: {
        ...mapActions(['changeFormState'])
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