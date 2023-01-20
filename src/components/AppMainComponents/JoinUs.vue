<template>
    <section id="join-us">
        <div class="cards-container">
            <div class="card send-email">
                <p>Are You Ready?</p>
                <h3>Start A New Project</h3>
                <div class="email-input">
                    <input type="text" placeholder="Enter Your Email Address">
                    <button>submit</button>
                </div>
            </div>
            <div class="card start-now">
                <p>What Are You Waiting for?</p>
                <h3>Let's Talk About Work</h3>
                <button>start now</button>
            </div>
        </div>
        <div class="sponsor">
            <div v-for="client in clients" class="img-wrapper">
                <img :src="getImage(client.imgUri)" :alt="client.name + ' logo'">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'JoinUs',
    data(){
        return{
            clients:[
                {
                    name:'Avant Gard',
                    imgUri:'client-1-2x.png'
                },
                {
                    name:'Fastlane',
                    imgUri:'client-9-2x.png'
                },
                {
                    name:'Ron Jones',
                    imgUri:'client-7-2x.png'
                },
                {
                    name:'Chippy\'s',
                    imgUri:'client-3-2x.png'
                },
                {
                    name:'Bullseye',
                    imgUri:'client-4-2x.png'
                },
                {
                    name:'Mighty Furnitures',
                    imgUri:'client-5-2x.png'
                }
            ]
        }
    },
    methods:{
        getImage: function(imagePath){
            return new URL('../../assets/images/'+imagePath, import.meta.url).href
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/colors' as *;
@use '../../styles/general.scss' as *;

#join-us{
    padding: 270px 0 140px;
    position: relative;
    .cards-container{
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: calc(100% - 100px);
        left: calc(50% - 1160px/2);
        width: 1160px;

        .card{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100%/2 - 20px);
            text-align: center;
            padding: 60px 145px;
            border-radius: 15px;

            p{
                color: $c-gray-1;
                padding-bottom: 15px;
            }

            h3{
                color: $c-lightest;
                font-size: 1.8rem;
                padding-bottom: 70px;
            }

        }
        .send-email{
            background:linear-gradient(to right, $bg-dark-1, black);
            box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
            .email-input{
                display: flex;
                background-color: $bg-gray-t;
                border-radius: 40px;
                
                input{
                    color: $bg-gray-1;
                    background-color:#00000000;
                    border: none;
                    padding-left: 25px;
                }
                button{
                    color: $bg-gray-2;
                    width: 100px;
                    padding-left: 10px;
                    padding-right: 10px;
                    background-color: #00000000;
                }
            }
        }

        .start-now{
            background: linear-gradient(to right, $bg-gradient-green, $bg-gradient-yellow);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
            box-shadow: #e0a45f 0px 7px 29px 0px;

            button{
                @include brand-dark;
            }
        }
    }

    .sponsor{
        display: flex;
        justify-content: space-between;
    }

}
</style>