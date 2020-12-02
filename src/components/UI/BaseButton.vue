<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    
}
</script>
<style scoped>
button {
    outline: none;
    border-radius: 8px;
    font-size: 25px;
    color:#FFFFFF;
    background-color:#1761a0;
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    padding:0.7em 1.4em;
    text-decoration:none;
}

button:hover {
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,.74);
}

</style>