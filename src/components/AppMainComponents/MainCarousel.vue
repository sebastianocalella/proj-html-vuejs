<template>
    <section id="main-carousel">
        <div class="container">
            <CarouselSlide v-for="(slide,index) in carouselSlides" :key="slide" :index="index"
            :textContent="slide.textContent"
            :socials="slide.socials"
            :imgUri="slide.imageUri"
            :visibleSlide="visibleSlide"
            :direction="carouselDirection"/>
        </div> 
        <div class="slider">
            <ul>
                <li><font-awesome-icon @click="prevSlide" icon="fa-solid fa-caret-left" 
                    :direction="carouselDirection"/></li>
                <li v-for="(element,index) in carouselSlides"
                :class="(visibleSlide == index) ? 'current-slide' : ''">
                    0{{ index + 1}}
                </li>
                <li><font-awesome-icon @click="nextSlide" icon="fa-solid fa-caret-right" 
                    :direction="carouselDirection"/></li>
            </ul>
        </div>
    </section>
</template>

<script>
import CarouselSlide from '../utilitiesComponents/CarouselSlide.vue'

export default {
    name: 'MainCarousel',
    components:{
        CarouselSlide
    },
    data(){
        return{
            carouselSlides:[
                {
                    textContent:{
                        surtitle:'17 years of experience',
                        title:'Focus on Your <span class=text-content-component-span>Business</span>',
                        text:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                        button:{
                            content:'read more',
                            color: 'brand-dark'
                        }
                    },
                    socials:[
                        'Facebook',
                        'Instagram',
                        'Youtube',
                        'Twitter'
                    ],
                    imageUri:'Group-35-2x.png'
                },
                {
                    textContent:{
                        surtitle:'17 years of experience',
                        title:'We Area a <br> Web Design <span class=text-content-component-span>Agency</span>',
                        text:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                        button:{
                            content:'read more',
                            color: 'brand-dark'
                        }
                    },
                    socials:[
                        'Facebook',
                        'Instagram',
                        'Youtube',
                        'Twitter'
                    ],
                    imageUri:'Group-36-2x.png'
                },
                {
                    textContent:{
                        surtitle:'17 years of experience',
                        title:'A Group of <br> Experts <span class=text-content-component-span>Planners</span>',
                        text:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                        button:{
                            content:'read more',
                            color: 'brand-dark'
                        }
                    },
                    socials:[
                        'Facebook',
                        'Instagram',
                        'Youtube',
                        'Twitter'
                    ],
                    imageUri:'Group-40-2x.png'
                }
            ],
            visibleSlide: 0,
            carouselDirection: ''
        }
    },
    methods:{
        nextSlide(){
            if(this.visibleSlide >= this.carouselSlides.length - 1){
                this.carouselDirection = 'right'
                this.visibleSlide = 0;
            } else {
                this.carouselDirection = 'right'
                this.visibleSlide++;
            }
        },
        prevSlide(){
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.carouselSlides.length - 1;
                this.carouselDirection = 'left'

            } else {
                this.visibleSlide--;
                this.carouselDirection = 'left'

            }
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;

#main-carousel{
    position: relative;
    .slider ul{
        display: flex;
        padding: 15px 10px;
        position: absolute;
        left: 50%;
        bottom: 15px;
        transform: translate(-50%,-50%);
        background: linear-gradient(to right, $bg-dark-1, $bg-darkest-t3);
        border-radius: 30px;

        li{
            padding: 0 10px;
            color: $c-lightest-t-6;
            transition: all .35s ease-in-out;
        }

        .current-slide{
            color: $c-brand-green;
        }
    }
}
</style>