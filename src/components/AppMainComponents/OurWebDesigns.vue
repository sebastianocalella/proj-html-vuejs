<template>
    <section id="OurWebDesigns">
        <div class="container">
            <ComponentDivider/>
            <div class="text-content-container">
                <TextContent
                :title="textContent.title"/>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
            </div>
        </div>

        <div class="cards-container">
            <div  v-for="card in cards" class="image-wrapper">
                <ImageCard
                :imgUri="card"/>
            </div>
        </div>
        <button>read more</button>
    </section>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import TextContent from '../utilitiesComponents/TextContent.vue';
import ImageCard from '../utilitiesComponents/ImageCard.vue';

export default {
    name: 'OurWebDesigns',
    components:{
        ComponentDivider,
        TextContent,
        ImageCard
    },
    data(){
        return{
            textContent:{
                title:'Our recent <span class="text-content-component-span">web designs</span> &<br> some examples of<br> past <span class="text-content-component-span">projects</span>',
                },
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

<style lang="scss">
    #OurWebDesigns{
        padding: 220px 150px;

            .text-content-container{
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: flex-end;
                padding-bottom: 70px;
    
                .text-content{
                    width: 45%;
                }
                p{
                    width: 52%;
                }
            }

        .cards-container{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-bottom: 130px;

            .image-wrapper{
                width: calc(25% - 4px);
            }
        }
        button{
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
</style>