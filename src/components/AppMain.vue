<template>
    <div>
        <section id="carousel-section">
            <MainCarousel/>
        </section>
    </div>
</template>

<script>
import MainCarousel from './AppMainComponents/MainCarousel.vue';

export default {
    name: 'AppMain',
    components:{
        MainCarousel
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/colors' as *;
@use '../styles/partials/alignment' as *;

    section{
        padding: $h-p-standard;

        &:nth-child(odd){
            background-color: $bg-light-2;
        }
    }
</style>