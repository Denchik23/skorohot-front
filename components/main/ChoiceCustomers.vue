<template>
  <section v-if="dishes.length">
    <div class="container">
      <div class="section-title">
        Выбор <span>наших покупателей!</span>
      </div>
      <div class="section-intro">
        Лучшие позиции месяца по мнению наших клиентов появляются здесь, чтобы попасть и в Вашу корзину тоже :)
      </div>
    </div>
    <VueSlickCarousel class="carousel-card" v-bind="carouselSettings">
      <div
        v-for="dish in dishes"
        :key="dish.id"
        class="carousel-card__item"
      >
        <catalog-dish-brief :data="dish" />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'ChoiceCustomers',
  components: { VueSlickCarousel },
  data () {
    return {
      carouselSettings: {
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      dishes: []
    }
  },
  created () {
    this.getDishes()
  },
  methods: {
    async getDishes () {
      this.dishes = await this.$store.dispatch('dish/getRecommendations')
    }
  }
}
</script>

<style lang="scss">
.carousel-card {
  padding-bottom: 50px;
  &__item {
    padding: 0 12px;
  }
  @include media-desktop {
    width: 100%;
    max-width: 1396px;
    margin: 0 auto;
    &__item {
      padding: 0 18px;
    }
  }
}
</style>
