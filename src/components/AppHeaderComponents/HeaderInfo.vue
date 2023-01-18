<template>
    <div class="container">
        <div class="contacts">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span>(001)88451234</span>
            <span>88455438</span>
        </div>

        <SocialsComponent/>
    </div>
</template>

<script>
import SocialsComponent from '../utilitiesComponents/SocialsComponent.vue';

export default {
    name: 'HeaderInfo',
    components:{
        SocialsComponent,
    }
}
</script>

<style lang="scss" scoped>

@use '../../styles/partials/colors.scss' as *;
@use '../../styles/partials/alignment.scss' as *;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: $h-p-standard;
        background-color: $bg-dark-1;
        color: $c-lightest;

        .contacts{
            width: 210px;
            display: flex;
            justify-content: space-between;
        }

        .socials{
            width: 85px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>