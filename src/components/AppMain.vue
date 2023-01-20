<template>
    <main>
        <MainCarousel/>
        <YourWebsite/>
        <OurMissions/>
        <OurWebDesigns/>
        <OurProjects/>
        <NewsBlog/>
        <JoinUs/>
        <button id="chat-with-us">
            <font-awesome-icon icon="fa-solid fa-comment" />
        </button>
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

<style lang="scss">
@use '../styles/partials/colors' as *;
@use '../styles/partials/alignment' as *;

    main{
        min-width: 1480px;
        position: relative;

        section{
            padding: $h-p-standard;
            position: relative;
    
            &:nth-child(odd){
                background-color: $bg-light-2;
            }
        }

        #chat-with-us{
            background: linear-gradient(45deg,$bg-gradient-yellow-t,$bg-gradient-green-t);
            font-size: 1.7rem;
            width: 60px;
            height: 60px;
            position: fixed;
            bottom: 100px;
            right: 70px;
            z-index: 3;
            &:hover{
                cursor: pointer;
                background: linear-gradient(45deg,$bg-darkest-t3,$bg-gray-t);
            }
        }
    }
</style>