<template>
  <main id="main" v-if="loading == false">

    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{{blogDetail.name}}</h2>
          <ol>
            <li><router-link :to="{name:'Home'}">Home</router-link></li>
            <li><router-link :to="{name:'BlogDetail', params: { slug: blogDetail.slug }}" >Blog</router-link></li>
          </ol>
        </div>

      </div>
    </section>

    <section id="blog" class="blog">
      <div class="container">

        <div class="row">

          <div class="col-lg-8 entries">

            <article class="entry entry-single">

              <div class="entry-img">
                <img :src="blogDetail.image" alt="blogDetail.name" class="img-fluid">
              </div>

              <h2 class="entry-title">
                <router-link :to="{name:'BlogDetail', params: { slug: blogDetail.slug }}" >{{blogDetail.name}}</router-link>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i> <router-link :to="{name:'BlogDetail', params: { slug: blogDetail.slug }}" >{{blogDetail.created_by.name}}</router-link></li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <router-link :to="{name:'BlogDetail', params: { slug: blogDetail.slug }}" ><time datetime="2020-01-01">{{blogDetail.created_date}}</time></router-link></li>
                </ul>
              </div>

              <div class="entry-content">
                  <div v-html="blogDetail.short_description"></div>
              </div>
              <div class="entry-content">
                  <div v-html="blogDetail.long_description"></div>
              </div>

              <div class="entry-footer clearfix">
                <div class="float-left">
                  <i class="icofont-folder"></i>
                  <ul class="cats">
                    <li><a href="#">Business</a></li>
                  </ul>

                  <i class="icofont-tags"></i>
                  <ul class="tags">
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div>

                <div class="float-right share">
                  <a href="" title="Share on Twitter"><i class="icofont-twitter"></i></a>
                  <a href="" title="Share on Facebook"><i class="icofont-facebook"></i></a>
                  <a href="" title="Share on Instagram"><i class="icofont-instagram"></i></a>
                </div>

              </div>

            </article><!-- End blog entry -->

            <div class="blog-author clearfix">
              <img src="assets/img/blog-author.jpg" class="rounded-circle float-left" alt="">
              <h4>Jane Smith</h4>
              <div class="social-links">
                <a href="https://twitters.com/#"><i class="icofont-twitter"></i></a>
                <a href="https://facebook.com/#"><i class="icofont-facebook"></i></a>
                <a href="https://instagram.com/#"><i class="icofont-instagram"></i></a>
              </div>
              <p>
                Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
              </p>
            </div><!-- End blog author bio -->

          </div><!-- End blog entries list -->

          <div class="col-lg-4">

            <div class="sidebar">

              <h3 class="sidebar-title">Search</h3>
              <div class="sidebar-item search-form">
                <form v-on:submit.prevent="searchBlog">
                  <input type="text" v-model="search">
                  <button type="submit"><i class="icofont-search"></i></button>
                </form>

              </div><!-- End sidebar search formn-->

              <h3 class="sidebar-title">Categories</h3>
              <div class="sidebar-item categories">
                <ul>
                  <li><a href="#">General <span>(25)</span></a></li>
                  <li><a href="#">Lifestyle <span>(12)</span></a></li>
                  <li><a href="#">Travel <span>(5)</span></a></li>
                  <li><a href="#">Design <span>(22)</span></a></li>
                  <li><a href="#">Creative <span>(8)</span></a></li>
                  <li><a href="#">Educaion <span>(14)</span></a></li>
                </ul>

              </div><!-- End sidebar categories-->

              <h3 class="sidebar-title">Recent Posts</h3>
              <div class="sidebar-item recent-posts">
                <div class="post-item clearfix">
                  <img src="assets/img/business-6.jpg" alt="">
                  <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/business-20.jpg" alt="">
                  <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/business-26.jpg" alt="">
                  <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/business-30.jpg" alt="">
                  <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div class="post-item clearfix">
                  <img src="assets/img/business-16.jpg" alt="">
                  <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

              </div><!-- End sidebar recent posts-->
            
            </div><!-- End sidebar -->

          </div><!-- End blog sidebar -->

        </div>

      </div>
    </section><!-- End Blog Section -->

  </main>
   <div class="loader" v-else>
        <div class="duo duo1">
          <div class="dot dot-a"></div>
          <div class="dot dot-b"></div>
        </div>
        <div class="duo duo2">
          <div class="dot dot-a"></div>
          <div class="dot dot-b"></div>
        </div>
      </div>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'BlogDetail',
  data(){
      return {
            blogDetail:{},
            loading:true,
            search:'',

        }
  },
  created:function(){

      this.getBlogDetail(this.$route.params.slug);
  },
  methods:{
      getBlogDetail(slug){
          this.loading = true;
          let url = 'http://localhost/softtechover/api/ApigetSingleBlogDetail/' + slug;
            this.axios.get(url).then((response) => {
                console.log(response.data.status);
                this.loading =false;
                this.blogDetail = response.data.data;
                if(response.data.status == 204){
                    this.$router.push({ name: 'Home' });
                }
                console.log(this.blogDetail);
            }).catch(error=>{
                console.log(error.response);
            });
      },
      searchBlog(){

          this.$router.push({ name: 'BlogListing',query:{search:this.search} });
      }
  }
}
</script>
<style>

</style>
