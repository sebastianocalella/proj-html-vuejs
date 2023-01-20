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
        <div class="img-wrapper">
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
        index: Number
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
        margin: 0 90px;

        .text-content-container{
            width: 35%;
            margin-left: 150px;

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
            width: 60%;
            overflow: hidden;

            img{
                width: 100%;
                transform: translateY(5%);
            }
        }
    }
</style>