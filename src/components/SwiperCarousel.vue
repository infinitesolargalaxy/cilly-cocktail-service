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
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/swiper.scss';
  import 'swiper/modules/navigation/navigation.scss';
  import 'swiper/modules/pagination/pagination.scss';

  export default Vue.extend({
    name: 'SwiperCarousel',
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
      const swiper = new Swiper(".swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        centeredSlides: true,
        grabCursor: true,
        slideToClickedSlide: true,
        observer: true, // Responsively update to changed slides
        spaceBetween: 30,
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // breakpoints: {

        // },
      });

      this.swiper = swiper;
    }
  });
</script>
<style scoped lang="scss">
.swiper {
        width: 80vw;
        height: 50vh;
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
      .swiper-pagination {
        height: 5rem;
      }
</style>