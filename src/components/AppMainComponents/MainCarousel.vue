<template>
    <div>
        <div class="text-content">
            <span>17 years of experience</span>
            <h1>Focus on Your <span>Business</span></h1>
            <ComponentDivider/>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove</p>
            <button>read more.</button>
            <span>
                <a href="">facebook </a>
                - 
                <a href="">instagram </a>
                - 
                <a href="">youtube </a>
                - 
                <a href="">twitter</a>
            </span>
        </div>
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';

export default {
    name: 'MainCarousel',
    components:{
        ComponentDivider
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;
    .text-content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 635px;
        height: 680px;
        padding: 175px 0 80px;

        >span{
            font-size: 1.2rem;
            text-transform: uppercase;
            font-weight: bold;

            &:first-child{
                background: -webkit-linear-gradient($bg-gradient-green, $bg-gradient-yellow);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        h1{
            font-size: 6rem;
            span{
                font-size: 6rem;
                color: $c-brand-green;
            }
        }
    }
</style>