<template>
<div>
    <input type="checkbox" id="toggle" :checked="modelValue" @click="hamburgerChecked(!modelValue)">
    <label id="hamburger" for="toggle" >
        <div class="hamburger">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
        </div>
    </label>
</div>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        hamburgerChecked(option) {
            this.$emit('update:modelValue', option)
        },
    },


    
}
</script>
<style scoped>
/* HAMBURGER ANIMATIONS */
/*========================================*/


.hamburger {
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: none;
    position: relative;
}

.hamburger .bar {
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: #ffffff;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
}

.bar1 {
    top: 0;
}

.bar2,
.bar3 {
    top: 13.5px;
}

.bar3 {
    right: 0;
}

.bar4 {
    bottom: 0;
}

#toggle {
    display: none;
}

/* HAMBURGER 1 */
#toggle:checked + label > .hamburger > .bar1{
    transform: rotate(45deg);
    transform-origin: 5%;
    width: 41px;
}

#toggle:checked + label > .hamburger > .bar2 {
    transform: translateX(-15px);
    background-color: transparent;
}

#toggle:checked + label > .hamburger > .bar3 {
    transform: translateX(15px);
    background-color: transparent;
}

#toggle:checked + label > .hamburger > .bar4 {
    transform-origin: 5%;
    transform: rotate(-45deg);
    width: 41px;
}


/*Mobile Styles*/
@media only screen and (max-width: 1100px) {



   .hamburger {
       display: block;
    } 


   #toggle:checked + #hamburger + .menu {
       display: block ;
       animation: fadein 2s;
       
    }

}




@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>