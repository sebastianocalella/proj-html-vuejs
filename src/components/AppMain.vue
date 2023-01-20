<template>
    <main>
        <MainCarousel/>
        <YourWebsite/>
        <OurMissions/>
        <OurWebDesigns/>
        <OurProjects/>
        <NewsBlog/>
        <JoinUs/>
    </main>
</template>

<script>
import MainCarousel from './AppMainComponents/MainCarousel.vue';
import YourWebsite from './AppMainComponents/YourWebsite.vue';
import OurMissions from './AppMainComponents/OurMissions.vue';
import OurWebDesigns from './AppMainComponents/OurWebDesigns.vue';
import OurProjects from './AppMainComponents/OurProjects.vue';
import NewsBlog from './AppMainComponents/NewsBlog.vue';
import JoinUs from './AppMainComponents/JoinUs.vue'

export default {
    name: 'AppMain',
    components:{
        MainCarousel,
        YourWebsite,
        OurMissions,
        OurWebDesigns,
        OurProjects,
        NewsBlog,
        JoinUs
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/colors' as *;
@use '../styles/partials/alignment' as *;

    section{
        padding: $h-p-standard;
        position: relative;

        &:nth-child(odd){
            background-color: $bg-light-2;
        }
    }
</style>