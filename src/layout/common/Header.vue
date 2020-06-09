<template>
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo"><router-link :to="{ name: 'Home' }">Vue Js</router-link></h1>
      
      <nav class="nav-menu d-none d-lg-block">

        <ul>
          <li class="active"><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'BlogListing' }">Blog</router-link></li>
          <li><a href="contact.html">Contact</a></li>

        </ul>

      </nav><!-- .nav-menu -->

      <a href="index.html" class="get-started-btn ml-auto">Get Started</a>

    </div>
  </header>
</template>
<style>
@import '../../assets/vendor/bootstrap/css/bootstrap.min.css'; 
@import '../../assets/vendor/icofont/icofont.min.css';
@import '../../assets/vendor/boxicons/css/boxicons.min.css';
@import '../../assets/vendor/animate.css/animate.min.css';
@import '../../assets/vendor/remixicon/remixicon.css';
@import '../../assets/vendor/venobox/venobox.css';
@import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
@import '../../assets/css/style.css';
@import '../../assets/css/prism.css';
</style>
<script>

export default {
  name: 'Header'
}
</script>

