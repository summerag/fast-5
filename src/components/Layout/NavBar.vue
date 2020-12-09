<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="nav-logo">
        <a href="/">
            <img src="../../assets/logo.png">
        </a>
    </div>
    <hamburger class="menu" v-model="isChecked"> </hamburger>
    <div :class="isChecked ? 'activeDrop' : 'nav-links'" @click="isChecked = false">
        <router-link to="/">Home</router-link>
        <router-link to="/teams">Teams</router-link>
        <router-link to="/schedule">Schedule</router-link>
        <router-link to="/login">Log In</router-link>
    </div>
</nav>
</template>
<script>

import Hamburger from '../UI/Hamburger.vue'

export default {
    components: {
        Hamburger
    },
    data(){
        return {
            isChecked: false,
            windowWidth: window.innerWidth
        }
    },

    
}
</script>
<style scoped>

/*NAVBAR STYLES*/
/*========================================*/

.navbar {
    display: flex;
    background-color:rgb(147,221,255);
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 30px;
    text-align: right;
    color: #ffffff;
}




.nav-links {
   order: 2;
   width: 60%;
   margin: auto;
}
.nav-links a {
    padding: 15px;
}



.activeDrop {
    order: 2;
    width: 60%;
    margin: auto;
}

.activeDrop a{
    padding: 15px;
}

.nav-logo {
    order: 1;
    width: 40%;
    align-self: flex-start;    
}
.nav-logo img {
    float: left;
}



#toggle {
    display: none;
}
@media only screen and (max-width: 1100px) {
    .menu{
        order: 2;
        width: 5%;
        margin: auto;    
    }
    .nav-links {
        display: none;
        margin-top: 1000px;
    }
    .activeDrop a {
        display: block;
        border-bottom: 1px solid #EAEAEB;
        background-color: #ffffff;
        opacity: .95;
        color: gray;
        text-align: center;
        margin: 0;
        transition: 2s;
}
   .nav-logo{
       width: 75%;
   }

   .activeDrop {
       display: block ;
       width: 100%;
       margin-top: 120px;
       animation: fadein 2s;
       position: absolute;
    }
   
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

</style>