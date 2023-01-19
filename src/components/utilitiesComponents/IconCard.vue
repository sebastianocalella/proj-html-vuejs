<template>
    <div>
        <font-awesome-icon :icon="cardIcon" />
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
    
</style>