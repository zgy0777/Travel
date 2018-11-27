<template>
    <div class="container" @click="handleGallaryClick" >
        <div class="wrapper">
            <swiper :options="swiperOption"  >
            <!-- slides -->
            <swiper-slide v-for="(item,index) in imgs" :key="index"  >
                <img class="gallary-img" :src="item"  >
            </swiper-slide>
        
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallary",
        props:{
            imgs:{
                type: Array,
                default(){
                    return ['http://img1.qunarzz.com/sight/p0/1412/66/cd09ac9548221dcc4cef8dde5913c780.water.jpg_r_800x800_bea4d4a4.jpg','http://img1.qunarzz.com/sight/p0/201301/08/6f52991818c4b8ea93835fbb.jpg_600x330_2d24cc3f.jpg'];
                }
            }
        },
        data(){
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',
                    paginationType : 'fraction',
                    observer:true, 
                    observeParents:true,
                }
            }
        },
        methods:{
            handleGallaryClick(){
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow:inherit

    .container
        display:flex
        flex-direction: column
        justify-content: center
        z-index:99
        position: fixed
        left:0
        right:0
        top:0
        bottom:0
        background:#000
        .wrapper
            
            height:0
            padding-bottom:100%
            background:#fff
            .gallary-img
                width:100%
            .swiper-pagination
                color:#eee
                bottom:-1rem
</style>