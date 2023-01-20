<template>
    <div v-show="visibleSlide === index" class="container">
        <div class="text-content-container">
            <TextContent
            :surtitle="textContent.surtitle"
            :title="textContent.title"
            :text="textContent.text"
            :button="textContent.button"/>
            <ul>
                <li v-for="social in socials">
                    <span>{{ social }}</span>
                </li>
            </ul>
        </div>
        <div class="img-wrapper" :class="direction">
            <img :src="getCarouselImage(imgUri)" alt="">
        </div>
    </div>
</template>
<script>
import TextContent from './TextContent.vue';

export default {
    name:"CarouselSlide",
    components:{
        TextContent,
    },
    props:{
        textContent: Object,
        socials: Array,
        imgUri: String,
        visibleSlide: Number,
        index: Number,
        direction: String
    },
    methods:{
        getCarouselImage: function(imagePath){
            return new URL('../../assets/images/'+imagePath, import.meta.url).href
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 90px;

        .text-content-container{
            width: 30%;
            margin-left: 150px;
            min-width: 530px;
            margin-top: 135px;

            ul{
                display: flex;
                justify-content: space-between;
                width: 65%;
                margin-top: 70px;
                li{
                    font-weight: 500;
                }
            }
        }

        .img-wrapper{
            width: 65%;
            overflow: hidden;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>