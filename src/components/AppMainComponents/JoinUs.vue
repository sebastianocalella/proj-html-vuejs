<template>
    <div>
        <div class="card-container">
            <div class="card send-email">
                <p>Are You Ready?</p>
                <h3><input type="text" placeholder="Enter Your Email Address"></h3>
                <button>submit</button>
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
    </div>
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
    
</style>