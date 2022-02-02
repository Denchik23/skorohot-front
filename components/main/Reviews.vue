<template>
  <VueSlickCarousel class="carousel-reviews" v-bind="carouselSettings">
    <div
      v-for="(reviews, key) in data"
      :key="key"
      class="reviews-block"
    >
      <div class="substrate">
        <div
          v-for="item in reviews"
          :key="item.id"
          class="reviews"
        >
          <div class="reviews__head">
            <div class="reviews__avatar">
              <img src="~/assets/img/avatar.png" alt="avatar" width="54" height="53">
            </div>
            <div class="reviews__data">
              <div class="reviews__title">
                {{ item.name }}<br>Местный эксперт
              </div>
              <div class="reviews__star stars">
                <img v-for="n in item.stars" :key="n" src="~/assets/img/star-sharp.svg" width="15" alt="stars">
              </div>
            </div>
          </div>
          <div class="reviews__body">
            Пицца просто супер. Очень рада, что стала вашим постоянным клиентом) спасибо огромное. Особенно спасибо за то что добавочный перчик халапенье  можно заказать только на одну половинку.)))
          </div>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Reviews',
  components: { VueSlickCarousel },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      carouselSettings: {
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: false,
              variableWidth: false
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.carousel-reviews {
  padding-bottom: 50px;
}

.reviews-block {
  padding: 0 12px;

  @include media-laptop {
    padding: 0 50px;
    max-width: 500px;
  }

  @include media-desktop {
    max-width: 850px;
  }
}

.reviews {
  margin: 0 0 50px 0;

  &__head {
    display: flex;
  }

  &__avatar {
    width: 54px;
    margin-right: 20px;
  }

  &__title {
    margin-bottom: 15px;
  }

  &__star {
    img {
      width: 15px;
    }
  }

  &__body {
    font-size: 16px;
    padding-left: 30px;
    margin-top: 15px;

    > img {
      margin-top: 15px;
      display: block;
    }
  }
}
</style>
