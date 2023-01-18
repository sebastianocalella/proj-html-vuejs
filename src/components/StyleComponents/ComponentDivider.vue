<template>
    <div class="divider-container">
        <div class="small"></div>
        <div class="large"></div>
    </div>
</template>

<script>
export default {
    name: 'ComponentDivider'
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;
    .divider-container{
        display: flex;
        justify-content: space-between;
        width: 64px;
        height: 5px;
        margin: 25px 0 36px;
        
        .small{
            width: 9px;
            background-image: linear-gradient(to right, $c-brand-green, $c-brand-blue);
            border-radius: 2px;
        }
        .large{
            width: 48px;
            background: linear-gradient(to right, $c-brand-green, $c-brand-blue);
            border-radius: 2px;
        }
    }
</style>