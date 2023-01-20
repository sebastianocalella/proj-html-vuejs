<template>
    <section id="news-blog">
        <TextContent
        :title="textContent.title"/>
        <div class="card-container">
            <ImageCard v-for="(card,index) in cards"
            :index="index"
            :imgUri="card.imageUri"
            :date="card.date"
            :target="card.target"
            :author="card.author"/>
        </div>
        <button>view all posts</button>
    </section>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import ImageCard from '../utilitiesComponents/ImageCard.vue';
import TextContent from '../utilitiesComponents/TextContent.vue';

export default {
    name: 'NewsBlog',
    components:{
        TextContent,
        ComponentDivider,
        ImageCard
    },
    data(){
        return{
            textContent:{
                title:'Latest News & Our<span class="text-content-component-span"> Blog</span>'
            },
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

<style lang="scss">
@use '../../styles/general.scss' as *;

    #news-blog{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 240px 0 350px;

        .text-content>.divider-container{
            margin-left: calc(50% - 32px);
        }

        .card-container{
            display: flex;
            justify-content: space-between;
            margin-bottom: 75px;
            position: relative;

            >.container{
                padding: 0 40px;
                width: calc(100%/3 - 22px);
                border-radius: 15px;
                overflow: hidden;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

                .absolute-content-container{
                    border-radius: 10px;
                    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
                    padding: 25px 25px 0;
                    top: calc(100% - 40px);
                    width: calc(70%/3);
                    &.card-1{
                        left: calc(100%/6);
                    }
                    &.card-2{
                        left: 50%;
                    }
                    &.card-3{
                        left: calc(50% + (100%/3));
                    }
                }
            }
        }

        button{
            @include brand-dark;
        }
    }
</style>