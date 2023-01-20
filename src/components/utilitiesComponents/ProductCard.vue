<template>
    <div class="container">
        <div class="upper-border"></div>
        <h3>{{ title }}</h3>
        <p class="subtitle">{{ subtitle }}</p>
        <div class="colored-banner">
            <p>&dollar;<span>{{ price }}</span>/{{ productType }}</p>
        </div>
        <ul>
            <li v-for="feature in features">
            &check; {{ feature }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props:{
        title: String,
        subtitle: String,
        price: Number,
        productType: String,
        features: Array
    }
}
</script>

<style lang="scss" scoped>
    @use '../../styles/partials/colors' as *;

    .container{
        text-align: center;
        width: calc(100%/3 - 25px);
        border-radius: 15px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        &:nth-child(even) .upper-border,
        &:nth-child(even) .colored-banner{
                background: linear-gradient(to right, $bg-gradient-yellow, $bg-gradient-green);
            }

        .upper-border{
            width: 100%;
            height: 12px;
            background: black;
            margin-bottom: 25px;

        }
        h3{
            text-transform: uppercase;
            margin-bottom: 15px;
        }

        .subtitle{
            color: $c-gray-2;
            margin-bottom: 15px;
        }
        .colored-banner{
            color:$c-lightest;
            background: black;
            padding: 15px 0;
            margin-bottom: 50px;
            p{
                font-size: 1.7rem;
                span{
                    font-size: 3rem;
                }
            }
        }

        li{
            margin-bottom: 30px;
        }
    }
</style>