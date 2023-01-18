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
        
        &:nth-child(odd){
            padding: $h-p-standard;
            background-color: $bg-light-2;
        }
    }
</style>