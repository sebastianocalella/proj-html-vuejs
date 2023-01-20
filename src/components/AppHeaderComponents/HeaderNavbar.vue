<template>
    <div class="container">
        <div class="home">
            <img src="../../assets/images/cropped-Group-39-2x.png" alt="">
        </div>

        <div class="menu">
            <ul>
                <li v-for="listItem in menuList" class="menu-item">
                {{ listItem }}</li>
            </ul>
        </div>

        <div class="purchase-search">
            <button>purchase</button>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderNavbar',
    data(){
        return{
            menuList:[
                'home',
                'about',
                'services',
                'showcase',
                'blog',
                'contact'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@use '../../styles/general.scss' as *;
@use '../../styles/partials/colors.scss' as *;
@use '../../styles/partials/alignment.scss' as *;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 104px;
        padding: $h-p-standard;
        background-color: $bg-lightest;

        .home:hover{
            cursor: pointer;
        }

        .menu{
            height: 100%;

            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 515px;
                height: 100%;
    
                li{
                    text-transform: uppercase;
                    color: $c-gray-2;
                    &:hover{
                        cursor: pointer;
                        color: $c-dark-3;
                    }
                }
            }
        }

        .purchase-search{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 210px;

            button{
                @include brand-color;
            }

            :last-child{
                color: $c-brand-green;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
</style>