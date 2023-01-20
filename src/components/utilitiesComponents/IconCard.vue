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
        background-color: $bg-lightest;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
        border-radius: 25px;
        padding: 55px 45px;
        margin-bottom: 50px;

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
            background: linear-gradient(45deg,$bg-gradient-yellow-t,$bg-gradient-green-t);
            h2,.icon,p{
                color: $c-lightest;
            }
        }
    }
</style>