export default [
  {
    path: '/123',
    component: require('./components/home_page/home.vue'),
    tabs: [
      {
        path: '/',
        tabId: 'tab1',
        component: require('./components/home_page/index.vue')
      }, {
        path: '/tab2/',
        tabId: 'tab2',
        component: require('./pages/navbarsAndToolbars/tab1.vue')
      }, {
        path: '/tab3/',
        tabId: 'tab3',
        component: require('./pages/navbarsAndToolbars/tab3.vue')
      }, {
        path: '/tab4/',
        tabId: 'tab4',
        component: require('./pages/navbarsAndToolbars/tab4.vue')
      }
    ]
  },
  {
    path: '/forgetpassword',
    component: require('./components/login_registration/forgetpassword.vue')
  },
  {
    path: '/register',
    component: require('./components/login_registration/register.vue')
  },
  {
    path: '/',
    component: require('./components/login_registration/login.vue')
  },



  //////////////////////////////////////////可删/////////////////////////////
  {
    path: '/mainPage/',
    component: require('./pages/mainPage.vue')
  }, {
    path: '/about',
    component: require('./pages/about.vue')
  }, {
    path: '/accordion/',
    component: require('./pages/accordion.vue')
  }, {
    path: '/autocomplete/',
    component: require('./pages/autocomplete.vue')
  }, {
    path: '/calendarDatepicker/',
    component: require('./pages/calendarDatepicker.vue')
  }, {
    path: '/cards/',
    component: require('./pages/cards.vue')
  }, {
    path: '/chipsTags/',
    component: require('./pages/chipsTags.vue')
  }, {
    path: '/contacts/',
    component: require('./pages/contacts.vue')
  }, {
    path: '/floatingAction/',
    component: require('./pages/floatingAction/floatingAction.vue'),
  }, {
    path: '/floatingAction/staticFloating/',
    component: require('./pages/floatingAction/staticFloating.vue')
  }, {
    path: '/floatingAction/speedDial/',
    component: require('./pages/floatingAction/speedDial.vue')
  }, {
    path: '/forms/',
    component: require('./pages/forms/forms.vue')
  }, {
    path: '/forms/formElements/',
    component: require('./pages/forms/formElements.vue')
  }, {
    path: '/forms/checkboxesAndRadios/',
    component: require('./pages/forms/checkboxesAndRadios.vue')
  }, {
    path: '/forms/smartSelects/',
    component: require('./pages/forms/smartSelects.vue')
  }, {
    path: '/forms/buttons/',
    component: require('./pages/forms/buttons.vue')
  }, {
    path: '/forms/formStorage/',
    component: require('./pages/forms/formStorage.vue')
  }, {
    path: '/grid/',
    component: require('./pages/grid.vue')
  }, {
    path: '/icons/',
    component: require('./pages/icons.vue')
  }, {
    path: '/infiniteScroll/',
    component: require('./pages/infiniteScroll.vue')
  }, {
    path: '/lazyLoadImages/',
    component: require('./pages/lazyLoadImages.vue')
  }, {
    path: '/listView/',
    component: require('./pages/listView.vue')
  }, {
    path: '/loginScreen/',
    component: require('./pages/loginScreen/loginScreen.vue')
  }, {
    path: '/loginScreen/loginScreenEmbedded/',
    component: require('./pages/loginScreen/loginScreenEmbedded.vue')
  }, {
    path: '/mediaLists/',
    component: require('./pages/mediaList.vue')
  }, {
    path: '/messages/',
    component: require('./pages/messages.vue')
  }, {
    path: '/modals/',
    component: require('./pages/modals.vue')
  }, {
    path: '/navbarsAndToolbars/',
    component: require('./pages/navbarsAndToolbars/navbarsAndToolbars.vue')
  }, {
    path: '/navbarsAndToolbars/deepNavbar/',
    component: require('./pages/navbarsAndToolbars/deepNavbar.vue')
  }, {
    path: '/navbarsAndToolbars/deepNavbar/deep2/',
    component: require('./pages/navbarsAndToolbars/deep2.vue')
  }, {
    path: '/navbarsAndToolbars/deepNavbar/deep2/deep3/',
    component: require('./pages/navbarsAndToolbars/deep3.vue')
  }, {
    path: '/navbarsAndToolbars/hide/',
    component: require('./pages/navbarsAndToolbars/hide.vue')
  }, {
    path: '/navbarsAndToolbars/hide/hideNavbar/',
    component: require('./pages/navbarsAndToolbars/hideNavbar.vue')
  }, {
    path: '/navbarsAndToolbars/hide/hideToolbar/',
    component: require('./pages/navbarsAndToolbars/hideToolbar.vue')
  }, {
    path: '/navbarsAndToolbars/hide/hideBoth/',
    component: require('./pages/navbarsAndToolbars/hideBoth.vue')
  }, 
  // {
  //   path: '/navbarsAndToolbars/tabbar/',
  //   component: require('./pages/navbarsAndToolbars/tabbar.vue'),
  //   tabs: [
  //     {
  //       path: '/',
  //       tabId: 'tab1',
  //       component: require('./pages/navbarsAndToolbars/tab1.vue')
  //     }, {
  //       path: '/tab2/',
  //       tabId: 'tab2',
  //       component: require('./pages/navbarsAndToolbars/tab2.vue')
  //     }, {
  //       path: '/tab3/',
  //       tabId: 'tab3',
  //       component: require('./pages/navbarsAndToolbars/tab3.vue')
  //     }, {
  //       path: '/tab4/',
  //       tabId: 'tab4',
  //       component: require('./pages/navbarsAndToolbars/tab4.vue')
  //     }
  //   ]
  // },
   {
    path: '/navbarsAndToolbars/tabbarWithLabel/',
    component: require('./pages/navbarsAndToolbars/tabbarWithLabel.vue'),
    tabs: [
      {
        path: '/',
        tabId: 'tab1',
        component: require('./pages/navbarsAndToolbars/tab1.vue')
      }, {
        path: '/tab2/',
        tabId: 'tab2',
        component: require('./pages/navbarsAndToolbars/tab2.vue')
      }, {
        path: '/tab3/',
        tabId: 'tab3',
        component: require('./pages/navbarsAndToolbars/tab3.vue')
      }, {
        path: '/tab4/',
        tabId: 'tab4',
        component: require('./pages/navbarsAndToolbars/tab4.vue')
      }
    ]
  }, {
    path: '/navbarsAndToolbars/diffScrollTabbar/',
    component: require('./pages/navbarsAndToolbars/diffScrollTabbar.vue')
  }, {
    path: '/navbarsAndToolbars/hideBarsOnScroll/',
    component: require('./pages/navbarsAndToolbars/hideBarsOnScroll.vue')
  }, {
    path: '/navbarsAndToolbars/subNavbar/',
    component: require('./pages/navbarsAndToolbars/subNavbar.vue')
  }, {
    path: '/notifications/',
    component: require('./pages/notifications.vue')
  }, {
    path: '/photoBrowser/',
    component: require('./pages/photoBrowser.vue')
  }, {
    path: '/picker/',
    component: require('./pages/picker.vue')
  }, {
    path: '/popover/',
    component: require('./pages/popover.vue')
  }, {
    path: '/preloader/',
    component: require('./pages/preloader.vue')
  }, {
    path: '/progressBar/',
    component: require('./pages/progressBar.vue')
  }, {
    path: '/pullToRefresh/',
    component: require('./pages/pullToRefresh.vue')
  }, {
    path: '/searchBar/',
    component: require('./pages/searchBar.vue')
  }, {
    path: '/sidePanels/',
    component: require('./pages/sidePanels/sidePanels.vue')
  }, {
    path: '/sidePanels/panelRight2/',
    component: require('./pages/sidePanels/panelRight2.vue')
  }, {
    path: '/sidePanels/panelRight3/',
    component: require('./pages/sidePanels/panelRight3.vue')
  }, {
    path: '/sortableList/',
    component: require('./pages/sortableList.vue')
  }, {
    path: '/swipeToDelete/',
    component: require('./pages/swipeToDelete.vue')
  }, {
    path: '/swiperSlider/',
    component: require('./pages/swiperSlider/swiperSlider.vue')
  }, {
    path: '/swiperSlider/swiperHorizontal/',
    component: require('./pages/swiperSlider/swiperHorizontal.vue')
  }, {
    path: '/swiperSlider/swiperVertical/',
    component: require('./pages/swiperSlider/swiperVertical.vue')
  }, {
    path: '/swiperSlider/spaceBetweenSwiper/',
    component: require('./pages/swiperSlider/spaceBetweenSwiper.vue')
  }, {
    path: '/swiperSlider/multipleSlider/',
    component: require('./pages/swiperSlider/multipleSlider.vue')
  }, {
    path: '/swiperSlider/nestedSliders/',
    component: require('./pages/swiperSlider/nestedSliders.vue')
  }, {
    path: '/swiperSlider/loopSlider/',
    component: require('./pages/swiperSlider/loopSlider.vue')
  }, {
    path: '/swiperSlider/3DCube/',
    component: require('./pages/swiperSlider/3DCube.vue')
  }, {
    path: '/swiperSlider/3DCoverflow/',
    component: require('./pages/swiperSlider/3DCoverflow.vue')
  }, {
    path: '/swiperSlider/3DFlip/',
    component: require('./pages/swiperSlider/3DFlip.vue')
  }, {
    path: '/swiperSlider/fadeEffect/',
    component: require('./pages/swiperSlider/fadeEffect.vue')
  }, {
    path: '/swiperSlider/scrollbarSwiper/',
    component: require('./pages/swiperSlider/scrollbarSwiper.vue')
  }, {
    path: '/swiperSlider/controlGallery/',
    component: require('./pages/swiperSlider/controlGallery.vue')
  }, {
    path: '/swiperSlider/customSwiper/',
    component: require('./pages/swiperSlider/customSwiper.vue')
  }, {
    path: '/swiperSlider/parallax/',
    component: require('./pages/swiperSlider/parallax.vue')
  }, {
    path: '/swiperSlider/sliderLazyloading/',
    component: require('./pages/swiperSlider/sliderLazyloading.vue')
  }, {
    path: '/swiperSlider/progressPagination/',
    component: require('./pages/swiperSlider/progressPagination.vue')
  }, {
    path: '/swiperSlider/fractionPagination/',
    component: require('./pages/swiperSlider/fractionPagination.vue')
  }, {
    path: '/swiperSlider/zoom/',
    component: require('./pages/swiperSlider/zoom.vue')
  }, {
    path: '/tabs/',
    component: require('./pages/tabs/tabs.vue')
  }, {
    path: '/tabs/staticTabs/',
    component: require('./pages/tabs/staticTabs.vue')
  }, {
    path: '/tabs/animatedTabs/',
    component: require('./pages/tabs/animatedTabs.vue')
  }, {
    path: '/tabs/swipeableTabs/',
    component: require('./pages/tabs/swipeableTabs.vue')
  }, {
    path: '/timeline/',
    component: require('./pages/timeline/timeline.vue')
  }, {
    path: '/timeline/verticalTimeline/',
    component: require('./pages/timeline/verticalTimeline.vue')
  }, {
    path: '/timeline/horizontalTimeline/',
    component: require('./pages/timeline/horizontalTimeline.vue')
  }, {
    path: '/timeline/calendarTimeline/',
    component: require('./pages/timeline/calendarTimeline.vue')
  }, {
    path: '/virtualList/',
    component: require('./pages/virtualList.vue')
  }, {
    path: '/animation/',
    component: require('./pages/animation.vue')
  }, {
    path: '/colorThemes/',
    component: require('./pages/colorThemes.vue')
  }, {
    path: '/transitions/',
    component: require('./pages/transitions.vue')
  }, {
    path: '/coreFeatures/',
    component: require('./pages/coreFeatures.vue')
  }
]
