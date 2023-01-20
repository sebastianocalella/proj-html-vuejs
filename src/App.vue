<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  components: {
            AppHeader,
            AppMain,
            AppFooter
        },
}

</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  *{
    font-family: 'Quicksand', sans-serif;
    h1,h2,h3,h4{
      font-family: 'Ubuntu', sans-serif;
    }
  }
</style>
