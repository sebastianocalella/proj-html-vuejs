<template>
    <div class="container">
        <div class="text-content">
            <span>17 years of experience</span>
            <h1>Focus on Your <span>Business</span></h1>
            <ComponentDivider/>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
            <button>read more</button>
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
        <div class="img-wrapper">
            <img src="../../assets/images/Group-35-2x.png" alt="">
        </div>
        <div class="slider">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';

export default {
    name: 'MainCarousel',
    components:{
        ComponentDivider
    },
    data(){
        return{
            CarouselImages:[
                'Group-35-2x.png',
                'Group-36-2x.png',
                'Group-40-2x.png'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;

    .container{
        position: relative;
    }
    .text-content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 635px;
        padding: 175px 0 80px;

        >span{
            font-size: 1.2rem;
            text-transform: uppercase;
            font-weight: bold;
            color: $c-dark-3;

            &:first-child{
                background: -webkit-linear-gradient($bg-gradient-green, $bg-gradient-yellow);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 20px;
            }
        }

        h1{
            font-size: 6rem;
            span{
                font-size: 6rem;
                color: $c-brand-green;
            }
        }

        p{
            margin-bottom: 90px;
            font-size: 1.1rem;
            line-height: 1.9rem;
        }

        button{
            margin-bottom: 120px;
            height: 52px;
            width: 160px;
            border-radius: 80px;
            color: $c-lightest;
            text-transform: uppercase;
            border: none;
            background: linear-gradient(to right, $bg-dark-1, $bg-darkest-t3);
            box-shadow: #605d6e77 0px 7px 29px 0px;
            &:hover{
                cursor: pointer;
            }
        }

        a{
            text-decoration: none;
            &:visited{
                color: $c-dark-3;
            }
        }
    }

    .img-wrapper{
        position: absolute;
        height: 100%;
        top: 0;
        left: 40%;
        width: calc(60% + 150px);
        overflow: hidden;
        img{
            transform: translate(0, -10%);
        }
    }

    .slider ul{
        display: flex;
        padding: 15px 10px;
        position: absolute;
        left: 50%;
        bottom: 35px;
        transform: translate(-50%,-50%);
        background: linear-gradient(to right, $bg-dark-1, $bg-darkest-t3);
        border-radius: 30px;
        li{
            padding: 0 10px;
            color: $c-lightest-t-6;
        }
    }
</style>