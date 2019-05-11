<template>
    <div >
    <div class="recommend-title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
             <div class="item-img-wrapper">
                <img  class="item-img" :src="item.imgUrl" >
             </div>

            <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            </div>
       
        </li>
    </ul>
      </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    data(){
        return{
            recommendList: [
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
                    title:'世界园艺博览会',
                    desc:'一座会“呼吸”、有“生命”的绿色建筑。'
                },
                 {
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
                    title:'野生动物园',
                    desc:'敢与森林之王近距离接触吗？'
                },
                 {
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
                    title:'海洋馆',
                    desc:'真正的海洋世界'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/mixins.styl'
    .recommend-title
        margin-top:.2rem 
        line-height:.8rem
        background: #eee
        text-indent: .2rem 
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom: 33.9%

        .item-img
            width:100%
        
    .item-info
        padding:.1rem
        .item-title
            line-height: .54rem
            font-size: .32rem 
            ellipsis()
        .item-desc
            line-height:.4rem 
            color: #ccc
            ellipsis()

         
</style>
