<template>
    <div>
        <TextContent
        :title="textContent.title"
        :button="textContent.button"
        />

        <div class="cards-container">
            <IconCard v-for="card in cards"
            :cardIcon="card.icon"
            :cardTitle="card.title"
            :cardText="card.text"/>
        </div>
    </div>
</template>

<script>
import TextContent from '../utilitiesComponents/TextContent.vue';
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import IconCard from '../utilitiesComponents/IconCard.vue';

export default {
    name: 'YourWebsite',
    components:{
        ComponentDivider,
        TextContent,
        IconCard
    },
    data(){
        return{
            textContent:{
                title:'We Are Here To Make Your <span class="text-content-component-span">Website</span> Look More <span class="text-content-component-span">Elegant</span> And Stylish!',
                button:{
                    content:'view all',
                    color:'brand-color'
                }
            },
            cards:[
                {
                    icon: 'fa-solid fa-gauge-simple-high',
                    title: 'Speed Optimization',
                    text: 'Far far away, behind the mountains, far from the countries Vokalia Separated...',
                },
                {
                    icon: 'fa-solid fa-cloud',
                    title: 'Cloud Solutions',
                    text: 'Far far away, behind the mountains, far from the countries Vokalia Separated...',
                },
                {
                    icon: 'fa-solid fa-tablet-screen-button',
                    title: 'Website Design',
                    text: 'Far far away, behind the mountains, far from the countries Vokalia Separated...',
                },
                {
                    icon: 'fa-solid fa-stopwatch',
                    title: 'Online Marketing',
                    text: 'Far far away, behind the mountains, far from the countries Vokalia Separated...',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>