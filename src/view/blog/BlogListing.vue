<template>
  <main id="main">

    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Blog</h2>
          <ol>
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li>Blog</li>
          </ol>
        </div>

      </div>
    </section>

    <section id="blog" class="blog">
      <div class="container">

        <div class="row">
          
          <div class="loader" v-if="current_page == 0">
            <div class="duo duo1">
              <div class="dot dot-a"></div>
              <div class="dot dot-b"></div>
            </div>
            <div class="duo duo2">
              <div class="dot dot-a"></div>
              <div class="dot dot-b"></div>
            </div>
          </div>

          <div v-for="item in BlogData" :key="item.id" class="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <article class="entry">

              <div class="entry-img">
                <img :src="item.image" alt="" class="img-fluid" />
              </div>

              <h2 class="entry-title">
                <router-link :to="{name: 'BlogDetail', params: { slug: item.slug }}">{{item.name}}</router-link>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i> <router-link :to="{name: 'BlogDetail', params: { slug: item.slug }}">{{item.created_by.name}}</router-link></li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <router-link :to="{name: 'BlogDetail', params: { slug: item.slug }}"><time datetime="2020-01-01">{{item.createdDate}}</time></router-link></li>
                </ul>
              </div>

              <div class="entry-content">
                <div v-html="checkStringLimit(item.short_description,200)"></div>
                <div class="read-more">
                  <router-link :to="{name: 'BlogDetail', params: { slug: item.slug }}">Read More</router-link>
                </div>
              </div>

            </article><!-- End blog entry -->
          </div>

        </div>
        
        <div class="blog-pagination" data-aos="fade-up" v-if="last_page > 1">
          <ul class="justify-content-center">
            <li v-on:click="fetchBlogData(current_page-1)" v-if="current_page !=1"><a href="#"><i class="icofont-rounded-left"></i></a></li>
            <li v-for="(item,index) in last_page" v-bind:key="index" v-bind:class="[current_page == index+1 ?'active':'']" v-on:click="fetchBlogData(index+1)" >
                <a href="#">{{index+1}}</a>
            </li>
            <li v-on:click="fetchBlogData(current_page+1)" v-if="current_page != last_page"><a href="#"><i class="icofont-rounded-right"></i></a></li>
          </ul>
        </div>

      </div>
    </section>

  </main>
</template>

<script>
import Vue from 'vue'
Vue.filter('truncate');
export default {
    name: 'BlogListing',
    data(){
        return {
            BlogData:[],
            last_page:0,
            current_page:0
        }
    },
    created: function()
    {
        this.fetchBlogData();
    },

    methods: {
        fetchBlogData(page = undefined)
        {   
            this.current_page = 0;

            let url = 'http://localhost/softtechover/api/ApiGetHomePageLatestPost?page='+page+'&search='+this.$route.query.search;
            this.axios.get(url).then((response) => {
                this.BlogData = response.data.data.data;
                this.last_page = response.data.data.last_page;
                this.current_page = response.data.data.current_page;
                
            });
        },
        checkStringLimit(value,lengthLimit){

            if(value.length > lengthLimit){

                return value.substring(0,lengthLimit)+' ...';

            }else{

                return value;
            }
        }
    }

    
}
</script>
<style>

</style>
