<template>
    <div>
        <div class="text-content">
            <h2>
                Learn more about our <span>missions</span>
            </h2>
            <ComponentDivider/>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
            <button>read more</button>
        </div>
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';

export default {
    name: 'OurMissions',
    components:{
        ComponentDivider
    }
}
</script>

<style lang="scss" scoped>
    
</style>