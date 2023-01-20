<template>
    <header class="container">
        <HeaderInfo/>
        <HeaderNavbar/>
    </header>
</template>

<script>
import HeaderInfo from './AppHeaderComponents/HeaderInfo.vue'
import HeaderNavbar from './AppHeaderComponents/HeaderNavbar.vue'

export default {
    name: 'AppHeader',

    components: {
        HeaderInfo,
        HeaderNavbar
    }
}
</script>

<style lang="scss" scoped>
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 3;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 35px;
    }
</style>