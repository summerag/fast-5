<template>
    <div class="form-container" >
        <base-button @click="changeFormState(false)" class="close" button-type="noOutline">x</base-button>
        <h1>{{FormTitle}}</h1>
        <base-card>
            <form>
                <slot></slot>
            </form>
        </base-card>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    props:['formTitle'],


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

.form-container {
    display: block;
    z-index: 3;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, .9);
}

.close {
    position: absolute;
    right: 5%;
    width: 0%;
    margin: 0px;
}



</style>