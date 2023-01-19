<template>
    <section id="our-projects">
        <div class="absolute-cards-container">
            <div class="img-wrapper">
                <div class="blancket"></div>
                <img src="../../assets/images/person-with-long-curly-hair-PZ99QM2-2x.jpg" alt="">
            </div>
            <div class="white-card">
                <TextContent
                :title="textContentAbsolute.title"
                :text="textContentAbsolute.text"
                :ulList="textContentAbsolute.ulContent"/>
            </div>

            <!--<div class="text-content">
                <h2>
                    We <span>Love</span> What We Do
                </h2>
                <ComponentDivider/>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
                <ul>
                    <li>Far away, behind the word mountains</li>
                    <li>large language ocean</li>
                    <li>Far from the Countries Vokalia and Casonantia</li>
                </ul>
            </div> -->
        </div>
        <div class="text-content">
            <h2>
                With <span>Live Chat 24/7</span> support
            </h2>
            <ComponentDivider/>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
        </div>
        <div class="card-container">
            <ProductCard v-for="productCard in productCards"
            :title="productCard.title"
            :subtitle="productCard.subtitle"
            :price="productCard.price"
            :productType="productCard.productType"
            :features="productCard.features"/>
        </div>
        <div class="feedback">
            <font-awesome-icon icon="fa-solid fa-quote-left" />
            <p>When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!</p>
            <img src="../../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
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

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;

    #our-projects{
        display: flex;
        flex-direction: column;

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
    }
</style>