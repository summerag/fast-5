<template>
    <button :class="buttonType">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: ['buttonType']
}
</script>
<style scoped>
.base {
    outline: none;
    border-radius: 8px;
    font-size: 25px;
    color:#FFFFFF;
    background-color:#1761a0;
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    padding:0.7em 1.4em;
    text-decoration:none;
}

.base:hover {
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,.74);
}



.circular {
    font-size: 25px;
    height: 50px;
    width: 50px;
    background-color: rgb(147,221,255);
    color: rgba(255, 255, 255, .75);
    border-radius: 100%;
    margin: auto;
    border: none;
    transition: .75s;

}
.circular:hover {
    font-size: 50px;
    height: 75px;
    width: 75px;
    color: rgba(255, 255, 255, 1);
    transform: rotate(90deg);
}

</style>