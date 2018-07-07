<template>
  <f7-page no-toolbar toolbar-fixed tabs no-page-content data-page="toolbar">
    <f7-toolbar tabbar labels>
      <f7-link tab-link="#tab1" no-link-class active>
        <f7-icon f7="home" class="inactive"></f7-icon>
        <f7-icon f7="home" class="active"></f7-icon>
        <span class="tabbar-label">首页</span>
      </f7-link>
      <f7-link tab-link="#tab2" no-link-class>
        <f7-icon f7="search_strong" class="inactive">
          <f7-badge color="red">9</f7-badge>
        </f7-icon>
        <f7-icon f7="search_strong" class="active">
          <f7-badge color="red">9</f7-badge>
        </f7-icon>
        <span class="tabbar-label">开奖公告</span>
      </f7-link>
      <f7-link tab-link="#tab3" no-link-class>
        <f7-icon f7="phone_round" class="inactive"></f7-icon>
        <f7-icon f7="phone_round" class="active"></f7-icon>
        <span class="tabbar-label">在线客服</span>
      </f7-link>
      <f7-link tab-link="#tab4" no-link-class>
        <f7-icon f7="person" class="inactive"></f7-icon>
        <f7-icon f7="person" class="active"></f7-icon>
        <span class="tabbar-label">个人中心</span>
      </f7-link>
    </f7-toolbar>
    <f7-page-content tab active id="tab1" class="d_padding">
      <tab1></tab1>
    </f7-page-content>
    <f7-page-content tab id="tab2" class="d_padding">
      <tab2></tab2>
    </f7-page-content>
    <f7-page-content tab id="tab3" class="d_padding">
      <tab3></tab3>
    </f7-page-content>
    <f7-page-content tab id="tab4" class="d_padding">
      <tab4></tab4>
    </f7-page-content>
  </f7-page>
</template>

<script>
  import Tab1 from '@/components/home_page/index.vue'
  import Tab2 from '@/pages/navbarsAndToolbars/tab1'
  import Tab3 from '@/pages/navbarsAndToolbars/tab3'
  import Tab4 from '@/pages/navbarsAndToolbars/tab4'
  export default {
    data(){
     return{
       
     }
    },
    components: {
      Tab1,
      Tab2,
      Tab3,
      Tab4
    }
  }
</script>

<style lang="scss">
  @import "scss/public.scss";
  .page[data-page="toolbar"] {
    .content-block {
      height: 100%;
      padding: 0;
      margin: 0;
    }
    .d_padding {
      padding-top: 0;
      padding-bottom: r(98px) !important;
    }
    .tabbar-labels {
      height: r(98px);
      .tabbar-label {
        font-size: r(18px) !important;
      }
      .toolbar-inner {
        padding: r(13px) 0 r(12px);
        .f7-icons {
          font-size: r(40px) !important;
        }
      }
    }
    .toolbar {
      transform: none;
      transition: 0ms;
      a.active {
        color: $theme_color;
        i.inactive {
          display: none;
        }
        i.active {
          margin-left: 0;
          color: $theme_color !important;
        }
      }
      &:before {
        transform: scaleY(1);
      }
    }
    .tabbar {
      a:not(.active) {
        i.active {
          display: none;
        }
      }
    }
    a.tab-link {
      width: 25% !important;
    }
  }
</style>
