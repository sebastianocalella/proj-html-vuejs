<template>
    <section id="our-projects">
        <div class="absolute-cards-container">
            <div class="img-wrapper">
                <div class="blancket">
                    <div class="upper-content">
                        <h1>280</h1>
                        <span>projects</span>
                    </div>
                    <div class="lower-content">
                        <div class="comments">
                            <h4>+3,500</h4>
                            <span>user's comments</span>
                        </div>
                        <div class="separator"></div>
                        <div class="feedback">
                            <h4>100%</h4>
                            <span>happy clients</span>
                        </div>
                    </div>
                </div>
                <img src="../../assets/images/person-with-long-curly-hair-PZ99QM2-2x.jpg" alt="">
            </div>
            <div class="white-card">
                <TextContent
                :title="textContentAbsolute.title"
                :text="textContentAbsolute.text"
                :ulList="textContentAbsolute.ulContent"/>
            </div>
        </div>

        <div class="subscriptions-options">
            <TextContent
            :title="textContentSupport.title"
            :text="textContentSupport.text"/>
    
            <div class="cards-container">
                <ProductCard v-for="productCard in productCards"
                :title="productCard.title"
                :subtitle="productCard.subtitle"
                :price="productCard.price"
                :productType="productCard.productType"
                :features="productCard.features"/>
            </div>
        </div>
        <div class="feedback">
            <div class="blancket">
                <font-awesome-icon class="icon" icon="fa-solid fa-quote-left" />
                <p>When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!</p>
                <h5>lissa durbin</h5>
                <p>Client</p>
            </div>
            <div class="image-wrapper">
                <img src="../../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import ProductCard from '../utilitiesComponents/ProductCard.vue';
import TextContent from '../utilitiesComponents/TextContent.vue';

export default {
    name: 'OurProjects',
    components:{
        TextContent,
        ComponentDivider,
        ProductCard
    },
    data(){
        return{
            textContentAbsolute:{
                title: 'We <span class="text-content-component-span">Love</span> What We Do',
                text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                ulContent: [
                    'Far away, behind the word mountains',
                    'large language ocean',
                    'Far from the Countries Vokalia and Casonantia'
                ]
            },
            textContentSupport:{
                title:'With <span class="text-content-component-span">Live Chat 24/7</span> support',
                text:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.'
            },
            productCards:[
                {
                    title: 'designing',
                    subtitle: 'All Designs',
                    price: 13,
                    productType:'Design',
                    features: [
                        'Creative Design Enabled',
                        'Vibrant Color Usage',
                        'Eye catching Design',
                        'Extreme Typography',
                        'Exeptional Design'
                    ]
                },
                {
                    title: 'development',
                    subtitle: 'WordPress Project',
                    price: 15,
                    productType:'Project',
                    features: [
                        'Creative Design Enabled',
                        'Vibrant Color Usage',
                        'Eye catching Design',
                        'Extreme Typography',
                        'Exeptional Design'
                    ]
                },
                {
                    title: 'seo',
                    subtitle: 'Web Products',
                    price: 10,
                    productType:'Product',
                    features: [
                        'Creative Design Enabled',
                        'Vibrant Color Usage',
                        'Eye catching Design',
                        'Extreme Typography',
                        'Exeptional Design'
                    ]
                }
            ]
        }
    }

}
</script>

<style lang="scss">
@use '../../styles/partials/colors' as *;

    #our-projects{
        display: flex;
        flex-direction: column;
        align-items: center;

        .absolute-cards-container{
            width: 100%;
            position: relative;
            padding: 200px 0;

            .img-wrapper{
                position: relative;
                left: 0;
                top: 0;
                width: 55%;
                border-radius: 10px;
                overflow: hidden;
                img{
                    width: 100%;
                }
                .blancket{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(45deg,$bg-gradient-yellow-t,$bg-gradient-green-t);
                    z-index: 1;
                    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: $c-lightest;

                    h1{
                        font-size: 8rem;
                        font-weight: 200;
                    }

                    span{
                        text-transform: uppercase;
                        font-size: 1.2rem;
                    }

                    .upper-content{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 50px;
                    }
                    .lower-content{
                        display: flex;
                        align-items: center;
                        h4{
                            font-size: 2rem;
                            text-align: center;
                        }

                        .separator{
                            width: 1px;
                            height: 80%;
                            background-color: $bg-lightest;
                            margin: 0 45px;
                        }
                    }
                }
            }

            .white-card{
                position: absolute;
                right: 0;
                bottom: 150px;
                width: 55%;
                height: calc(100% - 400px);
                z-index: 2;
                padding: 150px 100px;
                background-color: $bg-lightest;
                border-radius: 10px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
        }

        .subscriptions-options{
            display: flex;
            justify-content: space-between;
            margin-bottom: 200px;

            .text-content{
                width: 30%;
            }
            .cards-container{
                display: flex;
                justify-content: space-between;
                width: 60%;
            }
        }

        >.feedback{
            position: relative;
            width: calc(100% + 300px);
            height: 800px;
            background-image: url(../../assets/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg);
            background-size: cover;
            
            .blancket{
                display: flex;
                flex-direction: column;
                padding: 170px 30% 150px;
                color: $c-lightest;

                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 1;
                background-color: $bg-dark-1;
            }

            .icon{
                font-size: 4.5rem;
                color: $c-brand-green;
                margin-bottom: 50px;
            }

            p{
                font-size: 1.5rem;
                line-height: 2.8rem;
                text-align: center;
                margin-bottom: 170px;
                &:first-of-type{
                    font-style: italic;
                } 
            }

            h5{
                text-transform: uppercase;
                color: $c-brand-green;
                font-size: 1.8rem;
                text-align: center;
                margin-bottom: 15px;
            }
            
        }
        .image-wrapper{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 165px;
            width: 90px;
            height: 90px;
            border-radius: 45px;
            overflow: hidden;
            margin-bottom: 30px;
            border: 1px solid $c-lightest;
            z-index: 2;
            img{
                height: 100%;
            }
        }
    }
</style>