<template>
    <div class="icon-card-container">
        <font-awesome-icon class="icon" :icon="cardIcon" />
        <h2>{{ cardTitle }}</h2>
        <p>{{ cardText }}</p>
    </div>
</template>

<script>
export default {
    name: 'IconCard',
    props:{
        cardIcon: String,
        cardTitle: String,
        cardText: String
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;

    .icon-card-container{
        width: 47%;
        background: linear-gradient(45deg, $bg-lightest,$bg-lightest 0 30%, $bg-gradient-yellow-t,$bg-gradient-green-t);
        background-size: 300%;
        background-position: left;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
        border-radius: 25px;
        padding: 55px 45px;
        margin-bottom: 50px;
        transition: background-position .6s;


        .icon{
            font-size: 3.5rem;
            color: $c-brand-green;
            margin-bottom: 45px;
        }

        h2{
            margin-bottom:30px
        }

        p{
            color:$c-gray-2;
            line-height: 1.8rem;
        }

        &:hover{
            background-position: right;
            h2,.icon,p{
                color: $c-lightest;
                transition: 300ms ease-in-out;
            }
        }
    }
</style>