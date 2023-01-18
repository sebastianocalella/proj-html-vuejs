<template>
    <div class="container">
        <div class="contacts">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span>(001)88451234</span>
            <span>88455438</span>
        </div>

        <div class="socials">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-pinterest-p" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderInfo'
}
</script>

<style lang="scss" scoped>

@use '../../styles/partials/colors.scss' as *;
@use '../../styles/partials/alignment.scss' as *;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: $h-p-standard;
        background-color: $bg-dark-1;
        color: $c-lightest;

        .contacts{
            width: 210px;
            display: flex;
            justify-content: space-between;
        }

        .socials{
            width: 85px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>