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
                <div class="blancket">
                    <div class="categories">
                        <span v-for="category in card.blancket.categories"> {{ category }} </span>
                    </div>
                    <h4>{{ card.blancket.hText }}</h4>
                </div>
                <ImageCard
                :imgUri="card.imgUri"/>
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
                {
                    imgUri:'ina-soulis-227104-unsplash-1024x1024.jpg',
                    blancket:{
                        hText:'The Basket Of Flowers',
                        categories:[
                            'brandings',
                            'marketing'
                        ],
                    }
                },
                {
                    imgUri:'sunisa-misa-531163-unsplash-1024x1024.jpg',
                    blancket:{
                        hText:'A Famous Ferris Wheel',
                        categories:[
                            'marketing'
                        ],
                    }
                },
                {
                    imgUri:'355H-1024x1024.jpg',
                    blancket:{
                        hText:'Complementary Colors',
                        categories:[
                            'brandings',
                            'marketing'
                        ],
                    }
                },
                {
                    imgUri:'photo-1448932252197-d19750584e56-1024x1024.jpg',
                    blancket:{
                        hText:'Business Prestige',
                        categories:[
                            'brandings',
                        ],
                    }
                },
                {
                    imgUri:'business-competition-PB366D8-1024x1024.jpg',
                    blancket:{
                        hText:'Colorful Origami boats',
                        categories:[
                            'brandings',
                            'marketing'
                        ],
                    }
                },
                {
                    imgUri:'cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
                    blancket:{
                        hText:'Modern couch',
                        categories:[
                            'marketing'
                        ],
                    }
                },
                {
                    imgUri:'aa9a4539-PQGJ7HU-1024x1024.jpg',
                    blancket:{
                        hText:'Hot Air Balloons',
                        categories:[
                            'brandings',
                            'marketing'
                        ],
                    }
                },
                {
                    imgUri:'cody-davis-253928-unsplash-1024x1024.jpg',
                    blancket:{
                        hText:'Make Difference',
                        categories:[
                            'brandings',
                        ],
                    }
                },
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
@use '../../styles/general.scss' as *;
@use '../../styles/partials/colors' as *;

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
                position: relative;

                .blancket{
                    display: flex;
                    flex-direction: column-reverse;
                    align-items: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: calc(100% - 4px);
                    background: linear-gradient(45deg, $bg-gradient-yellow, $bg-gradient-green);
                    z-index: 1;
                    opacity: 0;
                    transition: opacity .72s;

                    .categories{
                        width: 100%;
                        display: flex;
                        justify-content: space-evenly;
                    }

                    h4{
                        font-size: 1.4rem;
                        padding-bottom: 1.2rem;
                    }
                    span{
                        padding-bottom: 1rem;
                        text-transform: uppercase;
                    }

                    color: $c-lightest;

                    &:hover{
                        opacity: .85;
                        cursor: pointer;
                    }
                }
            }
        }
        button{
            margin-left: 50%;
            transform: translateX(-50%);
            @include brand-color
        }
    }
</style>