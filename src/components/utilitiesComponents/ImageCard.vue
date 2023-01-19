<template>
    <img :src="getimage(imgUri)" alt="">
    <p v-if="date&&author">{{ date }} &middot; {{ author }}</p>
    <h4 v-if="target">{{ target }}</h4>
</template>

<script>
export default {
    name:'ImageCard',
    props:{
        imgUri: String,
        date: String,
        target: String,
        author: String
    },
    methods:{
        getimage: function(imagePath){
            return new URL('../../assets/images/'+imagePath, import.meta.url).href
        },
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>