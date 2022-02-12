<template>
  <div>
    <main>
      <div class="container">
        <div class="ingredients-search">
          <div class="ingredients-search__close">
            <button class="close-pic" @click="clearSearchIngredient"/>
          </div>
          <div class="ingredients-search__button">
            <ui-base-button
              shadow
              title="Найти по ингредиенту"
            />
          </div>
          <div class="ingredients-search__body">
            <span v-if="!searchIngredients.length" class="ingredients-search__empty">*Не выбран ингредиент</span>
            <div
              v-else
              v-for="(item, key) in searchIngredients"
              :key="key"
              class="ingredients-search__item"
            >
              <img :src="`/icons/${item.icon}.svg`" :alt="item.icon" width="45" height="45">
            </div>
          </div>
        </div>
      </div>
    </main>
    <section
      v-for="(ingredient, key) in ingredients"
      :key="key"
    >
      <div class="container">
        <h2 class="ingredients-title section-title">
          {{ ingredient.category }}
        </h2>
        <div class="composition">
          <div
            v-for="(item, ingKey) in ingredient.ingredients"
            :key="ingKey"
            class="composition__item"
          >
            <div
              :class="{'ingredient_selected': item.selected}"
              @click="choiceSearchIngredient({ key, ingKey })"
              class="ingredient substrate"
            >
              <div class="ingredient__img">
                <img :src="`/icons/${item.icon}.svg`" :alt="item.icon" width="79" height="79">
              </div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'search',
  async asyncData ({ app, route, params, error, store }) {
    await store.dispatch('ingredient/fetchList')
  },
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
      searchIngredients: state => state.ingredient.searchIngredients
    })
  },
  methods: {
    ...mapActions({
      choiceSearchIngredient: 'ingredient/choiceSearchIngredient',
      clearSearchIngredient: 'ingredient/clearSearchIngredient'
    })
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

  &__item {
    display: inline-block;
    margin: 0 4px;

    > img {
      width: 40px;
    }
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

  &_selected {
    background: linear-gradient(180deg, #0d0d0d, #442315);
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
