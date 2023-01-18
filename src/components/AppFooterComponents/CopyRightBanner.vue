<template>
    <div class="container">
        <span>&copy; 2020 phlox businnes theme</span>
        <SocialsComponent/>
    </div>
</template>

<script>
import SocialsComponent from '../utilitiesComponents/SocialsComponent.vue';

export default {
    name: 'CopyRightBanner',
    components:{
        SocialsComponent,
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;
@use '../../styles/partials/alignment' as *;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 112px;
        background: linear-gradient(to right, $bg-dark-1,$bg-darkest-t3);
        padding: $h-p-standard;
        color: $c-lightest-t-6;
    }
</style>