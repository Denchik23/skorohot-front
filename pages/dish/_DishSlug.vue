<template>
  <div>
    <main>
      <div class="container">
        <ul class="bread-crumbs">
          <li class="bread-crumbs__item"><a href="#">Главная</a></li>
          <li class="bread-crumbs__item"><a href="#">Меню</a></li>
          <li class="bread-crumbs__item"><a href="#">Пицца</a></li>
          <li class="bread-crumbs__item">Пицца "Охотник"</li>
        </ul>
        <catalog-categories />
      </div>
    </main>
    <section>
      <div class="container">
        <div class="dish">
          <div class="dish__left">
            <div class="slider-dish">
              <div class="slider-dish__item"><img src="img/pizza-card.jpg" width="303" height="302" alt="pizza-card"></div>
              <div class="slider-dish__item"><img src="https://skorohot.ru/images/cache/webp/31cb669cc5dff07286fce181a2fa28bf.webp" alt="pizza-card"></div>
              <div class="slider-dish__item"><img src="img/pizza-card.jpg" width="303" height="302" alt="pizza-card"></div>
              <div class="slider-dish__item"><img src="img/pizza-card.jpg" width="303" height="302" alt="pizza-card"></div>
              <div class="slider-dish__item"><img src="img/pizza-card.jpg" width="303" height="302" alt="pizza-card"></div>
            </div>
            <div class="slider-dish-nav">
              <img src="img/card-nav.png" class="slider-dish-nav__item" width="96" height="93" alt="slider-dish-nav__item">
              <img src="https://skorohot.ru/images/cache/webp/31cb669cc5dff07286fce181a2fa28bf.webp" class="slider-dish-nav__item" width="96" height="93" alt="slider-dish-nav__item">
              <img src="img/card-nav2.png" class="slider-dish-nav__item" width="96" height="93" alt="slider-dish-nav__item">
              <img src="img/card-nav3.png" class="slider-dish-nav__item" width="96" height="93" alt="slider-dish-nav__item">
              <img src="img/card-nav4.png" class="slider-dish-nav__item" width="96" height="93" alt="slider-dish-nav__item">
            </div>
            <button class="dish__video button">Смотреть видео</button>
            <div class="dish__rating">
              <i class="icon-hart"></i>
              <span>4,5 / 5</span>
            </div>
          </div>
          <div class="dish__right">
            <div class="section-title">Сет <span>"Бинго"</span></div>
            <div class="sauce__intro">Сытный и легкий Бинго сет, сочетает в себе роллы из нежной курочки и роллы из свежайших морепродуктов.</div>
            <ul class="set-ingredients">
              <li class="set-ingredients__item"><a href="#">Амай<span class="set-ingredients__chevron"></span></a></li>
              <li class="set-ingredients__item"><a href="#">Филадельфия лайт<span class="set-ingredients__chevron"></span></a></li>
              <li class="set-ingredients__item"><a href="#">Унаги лайт<span class="set-ingredients__chevron"></span></a></li>
              <li class="set-ingredients__item"><a href="#">Чикен ролл<span class="set-ingredients__chevron"></span></a></li>
              <li class="set-ingredients__item"><a href="#">Филадельфия лайт<span class="set-ingredients__chevron"></span></a></li>
            </ul>
            <div class="intro-ingredient substrate">
              <div class="intro-ingredient__title">Амай</div>
              <p>Морской окунь в кляре, изумительный снежный краб, сливочный сыр, свежий огурчик, икра Масаго.</p>
              <a href="#" class="intro-ingredient__link">Подробнее</a>
            </div>
            <div class="dish__sushi">
              <div class="dish__prices">
                1000 гр
                <span>929 Р.</span>
              </div>
              <button class="button_icon button">
                <span>в корзину</span><i class="icon-basket"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, route, params, error, store }) {
    await store.dispatch('getCategoriesList').catch(() => {
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    })
    const data = await store.dispatch('dish/getDish', route.params.DishSlug)
    return { data }
  }
}
</script>

<style lang="scss">
.bread-crumbs {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 30px 0;
  list-style: none;

  &__item {
    padding: 0 18px 0 0;
    background: url("~assets/img/polygon.svg") no-repeat right #0d0d0d;
    margin: 0 13px 0 0;
    font-size: 16px;
    font-weight: 300;

    > a {
      color: #fff;
    }

    &:last-child {
      background: none;
    }
  }
}

.dish {
  display: flex;
  flex-wrap: wrap;

  &__right,
  &__left {
    width: 100%;
  }

  &__left {
    position: relative;
    margin: 0 0 30px 0;
  }

  &__button {
    margin: 30px 0 0 0;
  }

  &__rating {
    position: absolute;
    right: 0;
    top: 15px;
    display: flex;
    align-items: center;
    background: #1c1c1c;
    font-weight: 500;
    border-radius: 10px 0 0 10px;
    padding: 8px;

    > i {
      margin: 0 15px 0 0;
    }
  }

  &__video {
    width: 100%;
    background: linear-gradient(188.15deg, #ed4b02 -115.8%, #1c1c1c 93.74%);
  }

  &__sushi {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0 0 0;
  }

  &__prices {
    font-weight: 300;

    > span {
      font-weight: 700;
      font-size: 24px;
    }
  }

  @include media-mobile {
    &__prices {
      width: 35%;
    }
  }

  @include media-tablet {
    &__button {
      margin: 30px 0 0 auto;
    }

    &__prices {
      width: 50%;

      > span {
        padding: 0 0 0 20px;
        font-size: 32px;
      }
    }
  }

  @include media-laptop {
    justify-content: space-between;

    &__right {
      width: 50%;
    }

    &__left {
      width: 42%;
    }

    &__rating {
      font-size: 24px;
      padding: 8px 50px;
    }
  }
}

.add-ingredients {
  margin: 30px 0;

  &__title {
    color: #3cd52e;
    margin: 0 0 15px 0;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
  }

  .add-ingredients__item {
    width: 100%;
    max-width: 100%;
    margin: 0 0 15px 0;
    min-height: auto;
    padding: 12px;

    &:last-child {
      margin: 0;
    }
  }

  &__action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 0 0;
  }

  &__data {
    font-size: 14px;
  }

  @include media-mobile {
    &__body {
      justify-content: space-between;
    }

    .add-ingredients__item {
      width: 216px;
    }
  }

  @include media-laptop {
    .add-ingredients__item {
      width: 49%;
    }
  }

  @include media-desktop {
    .add-ingredients__item {
      width: 216px;
    }

    .add-ingredients__count {
      width: auto;
      height: 40px;

      .button-count__add,
      .button-count__del,
      .button-count__count {
        font-size: 24px;
      }
    }
  }
}

.card-size {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  &__item {
    width: 30.3%;
    border: none;
    color: #fff;
    padding: 12px;

    > span {
      display: block;
      font-size: 14px;
      line-height: 1.5;

      &:last-child {
        font-size: 22px;
        font-weight: 700;
        padding: 8px 0 0 0;
      }
    }
  }

  &__item_active {
    background: #3cd52e;
  }

  @include media-tablet {
    &__item {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }

  @include media-desktop {
    &__item {
      padding: 6px 30px;

      > span:last-child {
        font-size: 24px;
      }
    }
  }
}

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
  margin: 30px 0;

  &__item {
    margin: 0 8px;
    border-radius: 8px;

    &.slick-current {
      opacity: 0.3;
    }
  }
}
</style>
