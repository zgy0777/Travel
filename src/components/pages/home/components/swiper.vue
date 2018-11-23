<template>
    <div class="wrap">
        <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>    
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true,
      },
      swiperList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg',
      },{
          id: '0002',
          imgUrl : 'http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg',
      }]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: red;
}

.wrapper 
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;
.swiper-img 
        width: 100%;
    

</style>