<template>
  <div>
    <main>
      <div class="container">
        <div class="ingredients-search">
          <div class="ingredients-search__close">
            <button class="close-pic"></button>
          </div>
          <div class="ingredients-search__button">
            <button class="button_shadow button">Найти по ингредиенту</button>
          </div>
          <div class="ingredients-search__body">
            <span class="ingredients-search__empty">*Не выбран ингредиент</span>
          </div>
        </div>
      </div>
    </main>
    <section
      v-for="(category, key) in categories"
      :key="key"
    >
      <div class="container">
        <h2 class="ingredients-title section-title">{{ category.name }}</h2>
        <div class="composition">
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/bell-pepper.svg" alt="bell-icon" width="79" height="79">
              </div>
              <span>Болгарский перец</span>
            </div>
          </div>
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/tomato.svg" alt="tomato-icon" width="79" height="79">
              </div>
              <span>Свежие томаты</span>
            </div>
          </div>
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/champion.svg" alt="champion-icon" width="79" height="79">
              </div>
              <span>Шампиньоны</span>
            </div>
          </div>
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/onion.svg" alt="onion-icon" width="79" height="79">
              </div>
              <span>Красный лук</span>
            </div>
          </div>
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/chili.svg" alt="chili-icon" width="79" height="79">
              </div>
              <span>Перчик Халапеньо</span>
            </div>
          </div>
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/fungus.svg" alt="fungus-icon" width="79" height="79">
              </div>
              <span>Болгарский перец</span>
            </div>
          </div>
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/green-tea.svg" alt="green-tea-icon" width="79" height="79">
              </div>
              <span>Болгарский перец</span>
            </div>
          </div>
          <div class="composition__item">
            <div class="ingredient substrate">
              <div class="ingredient__img">
                <img src="~/assets/img/olives.svg" alt="olives-icon" width="79" height="79">
              </div>
              <span>Болгарский перец</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'search',
  data () {
    return {
      data: null,
      defaultData: {
        dishes: []
      }
    }
  },
  computed: {
    ...mapState({
      ingredients: state => state.ingredient.ingredients,
      categories: state => state.ingredient.categories
    })
  },
  async asyncData ({ app, route, params, error, store }) {
    await store.dispatch('ingredient/fetchList', 'categories')
    await store.dispatch('ingredient/fetchList', 'ingredients')
  }
}
</script>

<style lang="scss">
.ingredients-search {
  margin: 0 -12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 5;

  &__close {
    padding: 0 12px;

    > button::before,
    > button::after {
      background-color: #333;
    }
  }

  &__body {
    width: 100%;
    padding: 0 12px;
    margin: 15px 0 0 0;
  }

  &__button {
    width: 80%;
    padding: 0 12px;
  }

  &__empty {
    color: #ed4b02;
    text-align: center;
    display: block;
  }

  @include media-tablet {
    &__close > button {
      width: 40px;
      height: 30px;

      &::before,
      &::after {
        height: 4px;
      }

      &::before {
        top: 13px;
      }

      &::after {
        bottom: 13px;
      }
    }

    &__button {
      width: auto;
    }
  }

  @include media-laptop {
    &__close {
      order: 0;
    }

    &__body {
      order: 1;
      width: 60%;
      margin: 0;
    }

    &__button {
      order: 2;
    }
  }
}

.ingredients-title {
  border-bottom: 1px solid #747474;
  padding: 0 0 6px 0;
  margin: 0;

  @include media-laptop {
    max-width: 70%;
  }

  @include media-desktop {
    padding: 0;
  }
}

.composition {
  display: flex;
  flex-wrap: wrap;
  justify-content: normal;
  margin: 0 -12px;

  &__item {
    width: 49.9%;
    padding: 0 12px;
    margin: 24px 0 0 0;
  }

  @include media-tablet {
    margin: 0 -15px;

    &__item {
      width: auto;
      padding: 0 15px;
      margin: 30px 0 0 0;
    }
  }

  @include media-desktop {
    margin: 0 -35px;

    &__item {
      width: auto;
      padding: 0 35px;
      margin: 70px 0 0 0;
    }
  }
}

.ingredient {
  color: #fff;
  text-align: center;
  min-height: 216px;
  max-width: 216px;

  &__img {
    margin: 0 0 8px 0;
  }

  @include media-tablet {
    width: 212px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #0d0d0d, #442315);
      // background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(237, 75, 2, 0.2) 100%), #191919;
    }
  }
}
</style>
