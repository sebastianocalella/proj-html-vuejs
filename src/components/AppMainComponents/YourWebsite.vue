<template>
    <div>
        <div class="text-content">
            <h2>
                We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And Stylish!
            </h2>
            <ComponentDivider/>
            <button>view all</button>
            <div class="cards-container">
                <IconCard v-for="card in cards"
                :cardIcon="card.icon"
                :cardTitle="card.title"
                :cardText="card.text"/>
            </div>
        </div>
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import IconCard from '../utilitiesComponents/IconCard.vue';

export default {
    name: 'YourWebsite',
    components:{
        ComponentDivider,
        IconCard
    },
    data(){
        return{
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