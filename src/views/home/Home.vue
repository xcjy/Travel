<template>
<div >
  <home-header> </home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
 </div>
 
</template> 

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/views/home/components/Header.vue'
import HomeSwiper from '@/views/home/components/Swiper.vue'
import HomeIcons from '@/views/home/components/icons.vue'
import HomeRecommend from '@/views/home/components/Recommend.vue'
import HomeWeekend from '@/views/home/components/Weekend.vue'


export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>

