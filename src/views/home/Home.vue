<template>
<div >
  <home-header> </home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
 </div>
 
</template> 

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/views/home/components/Header.vue'
import HomeSwiper from '@/views/home/components/Swiper.vue'
import HomeIcons from '@/views/home/components/icons.vue'

export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>

