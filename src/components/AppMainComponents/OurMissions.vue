<template>
    <div class="container">
        <div class="cards-container">
            <div class="img-wrapper">
                <div class="blancket"></div>
                <img src="../../assets/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
            </div>
            <div class="img-wrapper">
                <img src="../../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
            </div>
        </div>
        <div class="text-content-container">
            <TextContent
            :title="textContent.title"
            :text="textContent.text"
            :button="textContent.button"/>
        </div>
    </div>
</template>

<script>

import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import TextContent from '../utilitiesComponents/TextContent.vue';

export default {
    name: 'OurMissions',
    components:{
        ComponentDivider,
        TextContent
    },
    data(){
        return{
            textContent:{
                title: 'Learn more<br> about our<br> <span class="text-content-component-span">missions</span>',
                text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                button:{
                    content:'read more',
                    color:'brand-dark'
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;
    .container{
        display: flex;
        justify-content: space-between;
        padding: 350px 0 450px;

        .cards-container{
            position: relative;
            width: 55%;
        }
        .text-content-container{
            width: 35%;
        }
        .img-wrapper{
            position: absolute;
            overflow: hidden;
            height: 570px;

            img{
                width: 720px;
            }
            &:nth-of-type(1){
                left:-150px;
                bottom:-75px;
                border-radius: 0 35px 35px 0;

                .blancket{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: linear-gradient(45deg,$bg-gradient-yellow-t,$bg-gradient-green-t);
                    z-index: 1;
                }
            }
            &:nth-of-type(2){
                border-radius: 20px;
                left: 0;
                bottom: -150px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                z-index: 2;
            }
        }

    }
</style>