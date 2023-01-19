<template>
    <div class="container">
        <div class="card">
            <img src="../../assets/images/person-with-long-curly-hair-PZ99QM2-2x.jpg" alt="">
        </div>
        <div class="card">
            <div class="text-content">
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
            </div>
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
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';
import ProductCard from '../utilitiesComponents/ProductCard.vue'

export default {
    name: 'OurProjects',
    components:{
        ComponentDivider,
        ProductCard
    },
    data(){
        return{
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
    .container{
        position: relative;
    }
</style>