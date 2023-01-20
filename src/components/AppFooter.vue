<template>
    <footer>
        <FooterInfo/>
        <CopyRightBanner/>
    </footer>
</template>

<script>
import FooterInfo from './AppFooterComponents/FooterInfo.vue';
import CopyRightBanner from './AppFooterComponents/CopyRightBanner.vue';

export default {
    name: 'AppFooter',
    components:{
        FooterInfo,
        CopyRightBanner
    }
}
</script>

<style lang="scss" scoped>
</style>