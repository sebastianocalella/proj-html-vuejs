<template>
    <div class="text-content">
        <p v-if="surtitle">{{ surtitle }}</p>
        <h2 v-if="title" v-html="title"></h2>
        <ComponentDivider/>
        <p v-if="text">{{ text }}</p>
        <ul v-if="ulList">
        <li v-for="element in ulList.list">
        <span class="text-content-component-span">&check;</span>{{ element }}</li>
        </ul>
        <button v-if="button" :class="button.color">{{ button.content }}</button>
    </div>
</template>

<script>
import ComponentDivider from './ComponentDivider.vue';

export default {
    name: 'TextContent',
    components:{
        ComponentDivider
    },
    props:{
        surtitle: String,
        title: String,
        text: String,
        ulList: Array,
        button:{
            content: String,
            color: String,
        }
    }
}
</script>

<style lang="scss">
@use '../../styles/partials/colors' as *;
    .text-content{
        h2 .text-content-component-span{
            color:$c-brand-green;
        }
    }
</style>