<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="nav-logo">
        <a >
            <img src="../../assets/logo.png">
        </a>
    </div>
    <div class="nav-links">
        <input type="checkbox" id="toggle" class="checkbox1" v-model="checked">

        <div class="menu" @click="checked = false">
            <router-link to="/">Home</router-link>
            <router-link to="/teams">Teams</router-link>
            <router-link to="/schedule">Schedule</router-link>
            <router-link to="/sign up">Sign Up</router-link>
        </div>
    </div>
</nav>
</template>
<script>

export default {
    components: {

    },
    data(){
        return {
            checked: false
        }
    }
}
</script>
<style scoped>

/*NAVBAR STYLES*/
/*========================================*/
/*NAVBAR STYLES*/
/*========================================*/
.navbar {

    background-color:#206b75;
    width: 100%;
    height: auto;
    font-size: 30px;
    text-align: right;
    color: #ffffff;

    
}


.nav-links {
    padding: 15px;
}

.nav-links label {
    display: block;
    float: right;
}

.nav-logo {
    text-align: left;
    
}

.nav-logo img {
    margin: 15px;
}
.nav-logo a {
    position: absolute;
    top: 0px;
}


.menu{
    margin: 15px 15px;
    display: block;
    justify-self: end;
}

.menu a {
    padding: 15px;
}


.login {
    text-align: center;
}

#toggle {
    display: none;
}

/* HAMBURGER ANIMATIONS */
/*========================================*/


.hamburger {
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: relative;
    display: none;
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

/* HAMBURGER 1 */
.checkbox1:checked + label > .hamburger1 > .bar1{
    transform: rotate(45deg);
    transform-origin: 5%;
    width: 41px;
}

.checkbox1:checked + label > .hamburger1 > .bar2 {
    transform: translateX(-15px);
    background-color: transparent;
}

.checkbox1:checked + label > .hamburger1 > .bar3 {
    transform: translateX(15px);
    background-color: transparent;
}

.checkbox1:checked + label > .hamburger1 > .bar4 {
    transform-origin: 5%;
    transform: rotate(-45deg);
    width: 41px;
}


/*Mobile Styles*/
@media only screen and (max-width: 1100px) {

    .navbar {
        height: 96px;
    }

   .hamburger {
       display: block;
       margin: 15px;
    } 
   .menu {

       display: none;
       margin-top: 96px;
    }

   .menu a {
       display: block;
       border-bottom: 1px solid #EAEAEB;
       background-color: #ffffff;
       opacity: .95;
       color: gray;
       text-align: center;
       margin: 0;
       transition: 2s;
    }

   .checkbox1:checked + #hamburger + .menu {
       display: block ;
       animation: fadein 2s;
       
    }

}




@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>