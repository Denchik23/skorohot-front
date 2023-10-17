<template>
  <div>
    <main class="container home-head">
      <div class="home-head__body substrate">
        <img src="~/assets/img/banner.webp" width="1375" height="631" alt="banner">
      </div>
    </main>
    <section>
      <div class="container">
        <div class="section-title section-title_substrate">
          Скорохот <span>рекомендует!</span>
        </div>
        <div class="card-list">
          <div
            v-for="dish in dishesRecommended"
            :key="dish.id"
            class="card-list__col"
          >
            <catalog-dish-brief :data="dish" />
          </div>
        </div>
      </div>
    </section>
    <main-quick-menu />
    <section>
      <div class="container">
        <div class="section-title">
          Отзывы <span>наших клиентов</span>
        </div>
        <div class="section-intro">
          Честное мнение о нас со слов других :)
        </div>
      </div>
      <main-reviews :reviews="reviews" />
      <main-awards />
    </section>
    <main-contacts />
  </div>
</template>

<script>

export default {
  components: {},
  asyncData ({ store, error }) {
    let reviews = []
    return store.dispatch('review/fetchList').then((data) => {
      reviews = data
      return store.dispatch('dish/getRecommendations')
    }).then((data) => {
      return {
        reviews,
        dishesRecommended: data
      }
    }).catch((errorMessage) => {
      return error({
        statusCode: 404,
        message: errorMessage
      })
    })
  },
  data () {
    return {
      reviews: [],
      dishesRecommended: []
    }
  }
}
</script>

<style lang="scss">
.landing {
  /*@include media-tablet {
    background: url("~assets/img/fon.jpg") no-repeat 380px -435px #0d0d0d;
  }

  @include media-laptop {
    background: url("~assets/img/fon.jpg") no-repeat 540px 0 #0d0d0d;
  }

  @include media-desktop {
    background: url("~assets/img/fon.jpg") no-repeat 670px 0 #0d0d0d;
  }

  @include media-custom(1400px) {
    background: url("~assets/img/fon.jpg") no-repeat right top #0d0d0d;
  }*/
}
.home-head {
  &__body {
    > img {
      display: block;
    }
  }
  @include media-tablet {
  }

  @include media-laptop {
  }

  @include media-desktop {
  }
}

.application-action {
  @include media-desktop {
    margin-top: 64px;
  }
}
</style>
