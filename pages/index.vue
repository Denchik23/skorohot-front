<template>
  <div>
    <main class="container home-head">
      <div class="home-head__left">
        <div class="home-head__social">
          <social-links />
        </div>
        <div class="home-head__scroll">
          Листай ниже
        </div>
      </div>
      <div class="home-head__body">
        <div class="home-head__title title">
          Реально <span class="title_green">много</span><br>начинки
        </div>
        <div class="home-head__slogan">
          вкусная пицца, роллы и десерты
        </div>
        <nuxt-link to="/catalog/pitstsa" class="home-head__button button_shadow button">
          Меню
        </nuxt-link>
        <div class="home-head__time">
          <span>ЕЖЕДНЕВНО</span><br>
          С 10:00 ДО 00:00
        </div>
        <div class="home-head__contacts">
          <div class="home-head__address">
            ул. Омелькова, 21
          </div>
          <div class="home-head__phone">
            <a href="tel:+79180576767">+7 (918) 057 67 67</a>
          </div>
        </div>
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
  @include media-tablet {
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
  }
}
.home-head {
  &__left {
    display: none;
  }

  &__button {
    margin: 30px 0;
  }

  &__time {
    display: none;
  }

  &__contacts {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__address {
    font-weight: 300;
  }

  &__phone {
    font-weight: 500;

    > a {
      color: #fff;
    }
  }

  &__social {
    display: none;
  }

  &__title {
    font-size: 28px;
    line-height: 38px;
  }

  @include media-tablet {
    display: flex;
    padding-bottom: 100px;

    &__left {
      display: block;
      padding-right: 50px;
    }

    &__social {
      display: block;

      a {
        display: block;
        padding: 0 0 6px 0;
      }
    }

    &__scroll {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      font-size: 14px;
      position: relative;
      font-weight: 300;

      &::after {
        content: "";
        position: absolute;
        left: 10px;
        top: -33px;
        width: 1px;
        height: 20px;
        background: #fff;
      }
    }

    &__contacts {
      display: none;
    }

    &__button {
      margin: 45px 0 0 0;
    }
  }

  @include media-laptop {
    &__slogan {
      font-size: 28px;
    }

    &__scroll {
      font-size: 16px;
      margin-top: 10px;

      &::after {
        left: 11px;
        top: -63px;
        width: 1px;
        height: 44px;
      }
    }

    &__title {
      font-size: 60px;
      line-height: 72px;
    }
  }

  @include media-desktop {
    padding-bottom: 175px;

    &__left {
      padding-right: 80px;
    }

    &__time {
      display: block;
      position: relative;
      z-index: 5;
      font-size: 36px;
      line-height: 50px;
      margin-top: 80px;

      span {
        color: #3cd52e;
      }
    }

    &__slogan {
      font-size: 38px;
    }

    &__social {
      > a {
        padding: 14px 0;
      }
    }

    &__button {
      margin: 80px 0 0 0;
    }

    &__scroll {
      font-size: 18px;

      &::after {
        left: 11px;
        top: -118px;
        width: 1px;
        height: 81px;
      }
    }

    &__title {
      font-size: 84px;
      line-height: 95px;
    }
  }
}

.application-action {
  @include media-desktop {
    margin-top: 64px;
  }
}
</style>
