<template>
  <f7-block class="index_container">
    <f7-navbar>
            <f7-nav-center><span class="title">手机在线</span></f7-nav-center>
            <f7-link href="/mainPage/">123</f7-link>
        </f7-navbar>
    <div class="index_content">
        <f7-swiper pagination :params="{ loop: true, loopedSlides: items}" class="index_swiper">
      <f7-swiper-slide v-for="(item, index) in items" :key="index">{{'Slide ' + item}}</f7-swiper-slide>
    </f7-swiper>
    </div>
  </f7-block>
</template>

<script>
export default {
  data(){
       return {
      items: 5
    }
  }
}
</script>

<style lang="scss">
@import "scss/public.scss";
    .index_container{
        .index_swiper{
            height: r(260px);
            background-color: #fff;
        }
    }
</style>