<template>
    <div class="container">
        <ul>
            <li class="agency">
                <img src="../../assets/images/cropped-Group-39-2x.png" alt="main logo">
                <p>While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees. While the lovely valley teems with vapour around me</p>
            </li>
            <li class="links">
                <h3>quick links</h3>
                <ComponentDivider/>
                <ul>
                    <li v-for="link in quickLinkList">
                        {{ link }}
                    </li>
                </ul>
            </li>
            <li class="contact">
                <h3>contact</h3>
                <ComponentDivider/>
                <ul>
                    <li>Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</li>
                    <li>info@yourdomain.com</li>
                    <li>+99 (0) 101 0000 888</li>
                </ul>
            </li>
            <li class="location">
                <h3>locaion on map</h3>
                <ComponentDivider/>
                <img src="../../assets/images/map.png" alt="location">
            </li>
        </ul>
    </div>
</template>

<script>
import ComponentDivider from '../utilitiesComponents/ComponentDivider.vue';

export default {
    name: 'FooterInfo',
    components:{
        ComponentDivider
    },
    data(){
        return{
            quickLinkList:[
                'Careers',
                'News',
                'Terms of use',
                'Privacy projects',
                'About',
                'Contact'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@use '../../styles/partials/alignment' as *;
@use '../../styles/partials/colors' as *;
    .container{
        display: flex;
        align-items: flex-end;
        padding: $h-p-standard;
        height: 580px;

        >ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 560px;
            width: 100%;

            >li{
                width: 22%;
                height: 300px;
            }

            h3{
                text-transform: uppercase;
            }

            .agency img{
                    max-width: 100%;
                    margin-bottom: 25px;
            }

            .links li{
                text-align: center;
                &:hover{
                    cursor: pointer;
                    color:$c-brand-green;
                }
            }

            .contact li{
                margin-bottom: 35px;
            }

            .location img{
                    width: 100%;
            }
        }
    }
</style>