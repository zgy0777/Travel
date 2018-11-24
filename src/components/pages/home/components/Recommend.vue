<template>
    <div>
        <div class="title" >热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id" >
                    <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title" >{{item.title}}</p>
                    <p class="item-desc" >{{item.desc}}</p> 
                    <button class="item-button">{{item.button}}</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        data(){
            return {
                recommendList:[
                {
                    id: "0001",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg",
                    title: '广州圣亚海洋世界',
                    desc: '浪漫广州，带你体验不一样的秋天',
                    button: '查看详情'
                },
                {
                    id: "0002",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg",
                    title: '西山温泉',
                    desc: '不可思议的西山温泉',
                    button: '查看详情'
                },
                {
                    id: "0003",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg",
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
.item
    overflow: hidden;
    display: flex;
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
        .item-button  
            line-height: .44rem  
            margin-top: .16rem
            background: #ff9300
            padding: 0 .1rem
            border-radius: .06rem
            color: #fff


     
</style>