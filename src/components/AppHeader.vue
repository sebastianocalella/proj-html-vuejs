<template>
    <div class="container">
        <HeaderInfo/>
        <HeaderNavbar/>
    </div>
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
    
</style>