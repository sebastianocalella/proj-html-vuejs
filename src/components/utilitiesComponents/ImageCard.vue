<template>
    <div>
        <img :src="getimage(imgUri)" alt="">
        <p>{{ date }} &middot; {{ author }}</p>
        <h4>{{ target }}</h4>
    </div>
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
    
</style>