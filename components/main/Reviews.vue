<template>
  <div class="reviews-block">
    <div class="substrate">
      <div
        v-for="review in reviews"
        :key="review.id"
        class="reviews"
      >
        <div class="reviews__head">
          <div class="reviews__avatar">
            <img v-if="review.image !== null" :src="`${$config.appImagesUrl}/thumbnail/${review.image.thumbnail}`" :alt="review.image.title" width="300" height="300">
            <img v-else src="@/static/unknown-svgrepo.svg" :alt="review.name" width="54" height="54">
          </div>
          <div class="reviews__data">
            <div class="reviews__title">
              {{ review.name }}<br>{{ review.job_title }}
            </div>
            <div class="reviews__star stars">
              <img
                v-for="n in review.stars"
                :key="n"
                src="@/assets/img/star-sharp.svg"
                width="15"
                height="26"
                alt="stars"
              >
            </div>
          </div>
        </div>
        <div class="reviews__body">
          {{ review.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  props: {
    reviews: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.reviews-block {
  padding: 0 12px;
  margin: 0 auto;

  @include media-laptop {
    max-width: 70%;
  }

  @include media-desktop {
    max-width: 60%;;
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
    > img {
      border-radius: 50%;
    }
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
