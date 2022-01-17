<template>
  <section class="section-substrate">
    <div class="container">
      <div class="shopping-basket">
        <div class="section-title section-title_substrate">Скорохот <span>рекомендует!</span></div>
        <div class="shopping-basket__body">
          <div
            class="shopping-basket__item shopping-basket__item_chit"
            v-for="dish in data"
            :key="dish.id">
            <catalog-dish-brief :data="dish" is-mini @addCartItem="addCartItem" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Recommendations',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    addCartItem (data) {
      this.$emit('addCartItem', data)
    }
  }
}
</script>

<style lang="scss">
.shopping-basket {
  position: relative;
  z-index: 1;

  &__body {
    display: flex;
    flex-wrap: wrap;
    margin: 15px -12px;
  }

  &__item {
    width: 100%;
    padding: 0 12px;
    margin: 0 0 15px 0;

    &:last-child {
      margin: 0;
    }
  }

  @include media-tablet {
    background: #1c1c1c;
    border-radius: 10px;
    padding: 30px 12px;
    box-shadow: 0 5px 10px 2px rgba(35, 35, 35, 0.5);

    &__item {
      width: 49.9%;
      margin: 0 0 30px 0;
    }
  }

  @include media-laptop {
    &__item {
      width: 24.9%;
    }

    &__item_chit {
      width: 33.3%;
    }
  }

  @include media-desktop {
    padding: 30px;

    &__body {
      margin: 30px -25px;
    }

    &__item {
      padding: 0 25px;
    }
  }
}
</style>
