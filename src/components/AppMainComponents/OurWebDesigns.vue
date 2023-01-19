<template>
    <div>
        <ComponentDivider/>
        <h2>Our recent <span>web designs</span> & some examples of past <span>projects</span></h2>
        <ComponentDivider/>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
    </div>
    <div class="card-container">
        <div v-for="card in cards" class="card">
            <img :src="getCardImage(card)" alt="">
        </div>
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';

export default {
    name: 'OurWebDesigns',
    components:{
        ComponentDivider
    },
    data(){
        return{
            cards:[
                'ina-soulis-227104-unsplash-1024x1024.jpg',
                'sunisa-misa-531163-unsplash-1024x1024.jpg',
                '355H-1024x1024.jpg',
                'photo-1448932252197-d19750584e56-1024x1024.jpg',
                'business-competition-PB366D8-1024x1024.jpg',
                'cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
                'aa9a4539-PQGJ7HU-1024x1024.jpg',
                'cody-davis-253928-unsplash-1024x1024.jpg'
            ]
        }
    },
    methods:{
        getCardImage: function(imagePath){
            return new URL('../../assets/images/'+imagePath, import.meta.url).href
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>