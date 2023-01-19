<template>
    <div class="container">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
        <div>
            <p>&dollar;<span>{{ price }}</span>{{ productType }}</p>
        </div>
        <ul>
            <li v-for="feature in features">
            {{ feature }}</li>
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
</style>