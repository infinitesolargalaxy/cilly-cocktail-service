<template>
  <div>
    <h1>Cilly Cocktail Service</h1>

		<input type="text" name="" value="">
		<button type="button" name="button">Get Cocktail</button>

    <SwiperCarousel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SwiperCarousel from '@/components/SwiperCarousel.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    SwiperCarousel,
  },
  data() {
    return {
      curSlides: []
    }
  },
  methods: {
    getChoice() {
      const choice = document.querySelector('input')?.value as string;
      if (!choice.trim()) {
          alert('Please enter a valid name')
          return;
      }
      return choice;
    },
    getFetch(choice: string) {
      
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`

      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            const { drinks } = data;

            // Create table showing each image and instructions
            const drink = drinks[0];
            // document.querySelector('img').src = drink.strDrinkThumb;
            // document.querySelector('h2').innerText += `: ${drink.strDrink}`;
            // document.querySelector('h3').innerText += `\n\n${drinks[0].strInstructions}`
          })
          .catch(err => {
              console.log(`error ${err}`)
              alert(`error ${err}`)
          });
    },
  }
});
</script>