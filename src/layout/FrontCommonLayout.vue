<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
    
  
  </div>
</template>
<script>

import Header from '../layout/common/Header.vue';
import Footer from '../layout/common/Footer.vue';

export default {
  name: 'FrontCommonLayout',
  components:{
      Header,
      Footer
  }
}
</script>
<style>

</style>
