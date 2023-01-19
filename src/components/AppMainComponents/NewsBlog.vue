<template>
    <div>
        <div class="text-content">
            <h2>
                Latest News & Our<span>Blog</span>
            </h2>
            <ComponentDivider/>
            <div class="card-container">
                <ImageCard v-for="card in cards"
                :imgUri="card.imageUri"
                :date="card.date"
                :target="card.target"
                :author="card.author"/>
            </div>
            <button>view all posts</button>
        </div>
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import ImageCard from '../utilitiesComponents/ImageCard.vue'

export default {
    name: 'NewsBlog',
    components:{
        ComponentDivider,
        ImageCard
    },
    data(){
        return{
            cards:[
                {
                    imageUri:'serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg',
                    date:'May 24, 2018',
                    author: 'by Alex',
                    target:'Marketing Ideas'
                },
                {
                    imageUri:'Businessman-at-the-desk-in-his-office-resting--1024x768.jpg',
                    date:'May 24, 2018',
                    author: 'by Alex',
                    target:'Rest During Working Hours'
                },
                {
                    imageUri:'simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg',
                    date:'May 24, 2018',
                    author: 'by Alex',
                    target:'Develop Your Startup Idea'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>