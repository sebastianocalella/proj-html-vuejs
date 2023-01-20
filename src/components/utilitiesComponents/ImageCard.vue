<template>
    <div class="container">
        <img :src="getimage(imgUri)" alt="">
        <div v-if="(date&&author)||target" :class="'absolute-content-container card-' + (index+1)">
            <p v-if="date&&author">{{ date }} &middot; {{ author }}</p>
            <h4 v-if="target"><span>&#11044;</span> {{ target }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name:'ImageCard',
    props:{
        imgUri: String,
        date: String,
        target: String,
        author: String,
        index: Number
    },
    methods:{
        getimage: function(imagePath){
            return new URL('../../assets/images/'+imagePath, import.meta.url).href
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;
    .container{
    
        img{
            width: 100%;
            transition: all .4s ease-in-out;

        }
        .absolute-content-container{
            position: absolute;
            background-color: $bg-lightest;
            transform: translateX(-50%);

            p{
                color: $c-gray-1;
                font-size: .7rem;
                margin-bottom: 15px;
            }

            h4{
                font-size: 1.2rem;
                line-height: 40px;
                margin-bottom: 15px;

                span{
                    font-size: .6rem;
                    vertical-align: top;
                    color: $c-brand-green;
                }
            }
        }
    }
</style>