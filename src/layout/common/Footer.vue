<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>Sailor</h3>
              <p>
                A108 Adam Street <br>
                NY 535022, USA<br><br>
                <strong>Phone:</strong> +1 5589 55488 55<br>
                <strong>Email:</strong> info@example.com<br>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
    
  </footer>

</template>

<script>
export default {
  name: 'Footer',
  mounted() {

      let e1 = document.createElement('script')
      let e2 = document.createElement('script')
      let e3 = document.createElement('script')
      let e4 = document.createElement('script')
      let e5 = document.createElement('script')
      let e6 = document.createElement('script')
      let e7 = document.createElement('script')
      let e8 = document.createElement('script')
      let e9 = document.createElement('script')
      let e10 = document.createElement('script')

      e1.setAttribute('src', '/assets/vendor/jquery/jquery.min.js')      
      e2.setAttribute('src', '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
      e3.setAttribute('src', '/assets/vendor/jquery.easing/jquery.easing.min.js')
      e4.setAttribute('src', '/assets/vendor/php-email-form/validate.js')
      e5.setAttribute('src', '/assets/vendor/isotope-layout/isotope.pkgd.min.js')
      e6.setAttribute('src', '/assets/vendor/venobox/venobox.min.js')
      e7.setAttribute('src', '/assets/vendor/waypoints/jquery.waypoints.min.js')
      e8.setAttribute('src', '/assets/vendor/owl.carousel/owl.carousel.min.js')
      e9.setAttribute('src', '/assets/js/main.js')
      e10.setAttribute('src', '/assets/js/prism.js')

  
      document.getElementById("footer").appendChild(e1)
      document.getElementById("footer").appendChild(e2)
      document.getElementById("footer").appendChild(e3)
      document.getElementById("footer").appendChild(e4)
      document.getElementById("footer").appendChild(e5)
      document.getElementById("footer").appendChild(e6)
      document.getElementById("footer").appendChild(e7)
      document.getElementById("footer").appendChild(e8)
      document.getElementById("footer").appendChild(e9)
      document.getElementById("footer").appendChild(e10)
      
  }
}
</script>

<style>

</style>
