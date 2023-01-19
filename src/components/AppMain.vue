<template>
    <div>
        <section id="carousel-section">
            <MainCarousel/>
        </section>
        <section id="your-website">
            <YourWebsite/>
        </section>
        <section id="our-missions">
            <OurMissions/>
        </section>
        <section id="our-web-designs">
            <OurWebDesigns/>
        </section>
        <section id="our-projects">
            <OurProjects/>
        </section>
        <section id="news-blog">
            <NewsBlog/>
        </section>
        <section id="join-us">
            <JoinUs/>
        </section>
    </div>
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