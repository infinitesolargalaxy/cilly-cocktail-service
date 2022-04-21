<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/swiper.scss';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';
  export default Vue.extend({
    name: 'Swiper Carousel',
    components: {
    },
    data() {
      return {
        swiper: undefined || Swiper,
        cocktails: [],
      }
    },
    computed: {
      
    },
    mounted() {
      const swiper = new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        centeredSlides: true,
        grabCursor: true,
        slideToClickedSlide: true,
        observer: true, // Responsively update to changed slides
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {

        // },
        // breakpoints: {

        // },
      });

      // this.swiper = swiper;
    }
  });
</script>
<style scoped lang="scss">
.swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .swiper-slide {
        width: 60%;
      }
</style>