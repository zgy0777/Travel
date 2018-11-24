<template>
    <div>
        <div class="title" >周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id" >
                <div class="img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title" >{{item.title}}</p>
                    <p class="item-desc" >{{item.desc}}</p> 
                   
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeWeekend',
        data(){
            return {
                recommendList:[
                {
                    id: "0001",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
                    title: '广州圣亚海洋世界',
                    desc: '浪漫广州，带你体验不一样的秋天',
                    button: '查看详情'
                },
                {
                    id: "0002",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",
                    title: '西山温泉',
                    desc: '不可思议的西山温泉',
                    button: '查看详情'
                },
                {
                    id: "0003",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
                    title: '北京动物园',
                    desc: '国家4AAAA级动物园',
                    button: '查看详情'
                }
            ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    margin-top: .2rem
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
.item-img-wrapper
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%; 
.item-img
   width: 100%
.item-info
    padding: .1rem
    .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
    .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
    


     
</style>