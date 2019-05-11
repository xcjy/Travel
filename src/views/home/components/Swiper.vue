<template>
<div class="wrapper">
     <swiper :options="swiperOption"  >
    <!-- slides -->
     <swiper-slide v-for="item of swiperList" :key="item.id">
        <img  class="swiper-image" :src="item.imgUrl">
     </swiper-slide>

  
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

</div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data (){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop:true 
            },
            swiperList:[{
                id:'0001',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/437a486a1627adae39ab30e4d98fbcee.jpg_750x200_d8477149.jpg'
            },
            {
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/5e/cfee2e9e2f357202.jpg_750x200_b0308a43.jpg'
            },
            {
                id:'0003',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg '
            },
            ],
        }
    },
    methods:{
        
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        overflow:hidden
        width:100%
        height:0
        padding-bottom:26%
        .swiper-image
            width:100%

</style> 
