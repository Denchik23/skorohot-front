<template>
  <div>
    <VueSlickCarousel
      ref="dishView"
      class="slider-dish"
      :as-nav-for="$refs.dishNav"
      :focus-on-select="true"
      :arrows="false"
    >
      <div
        v-for="image in images"
        :key="image.id"
        class="slider-dish__item"
      >
        <img :src="`${$config.appImagesUrl}/${image.file_name}`" width="303" height="302" :alt="image.title">
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel
      ref="dishNav"
      class="slider-dish-nav"
      :as-nav-for="$refs.dishView"
      :focus-on-select="true"
      :arrows="false"
      :slides-to-show="5"
    >
      <div
        v-for="image in images"
        :key="image.id"
        class="slider-dish-nav__item"
      >
        <img :src="`${$config.appImagesUrl}/thumbnail/${image.file_name}`" width="96" height="93" :alt="image.title">
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Carousel',
  components: { VueSlickCarousel },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      dishNavSettings: {
        arrows: false,
        focusOnSelect: true,
        asNavFor: this.$refs.dishView,
        slidesToShow: 5
      }
    }
  },
  mounted () {
    this.$nextTick(this.$forceUpdate)
  }
}
</script>

<style lang="scss">
.slider-dish {
  &__item {
    padding: 12px;
    background: #161514;
    border-radius: 10px;
    text-align: center;
  }

  @include media-desktop {
    &__item {
      padding: 30px 12px;
    }
  }
}

.slider-dish-nav {
  margin: 15px 0 0 0;

  &__item {
    padding: 0 4px;
    > img {
      border-radius: 8px;
    }
  }

  .slick-current .slider-dish-nav__item > img {
    opacity: 0.3;
  }
}
</style>
