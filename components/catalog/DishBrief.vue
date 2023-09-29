<template>
  <div class="card" :class="{'card-mini': isMini, 'substrate': !isMini}">
    <div class="card__img">
      <img :src="preview" width="300" height="300" :alt="data.name" loading="lazy">
    </div>
    <div class="card__head" :class="{'card-mini__head': isMini}">
      <div class="card__name">
        {{ data.name }}
      </div>
    </div>
    <slot />
    <div v-if="data.ingredients.length" class="ingredients">
      <div v-for="(ingredient, index) in data.ingredients" :key="index" class="ingredients__col">
        <div class="ingredients__item">
          {{ ingredient.name }}
        </div>
      </div>
    </div>
    <div v-if="isDescription" class="card__intro" :class="{'card-mini__intro': isMini}">
      {{ data.description }}
    </div>
    <div class="card__data" :class="{'card-mini__data': isMini}">
      <div class="card__count">
        {{ data.weight }} {{ data.units }}
      </div>
      <div class="card__prices">
        {{ data.price }} руб.
      </div>
    </div>
    <client-only>
      <div class="card__buttons">
        <div class="button-count" :class="{'card-mini__count': isMini}">
          <button class="button-count__del" @click="quantityDown">-</button>
          <span class="button-count__count">{{ quantity }}</span>
          <button class="button-count__add" @click="quantityUp">+</button>
        </div>
        <ui-base-button
          v-if="!showDeleteButton"
          :class="{'card-mini__buy': isMini}"
          class="card__button-bay button_icon"
          :title="titleButtonBuy"
          :green="isProductAdded"
          @click="buyClickHandler"
        >
          <i class="icon-basket" />
        </ui-base-button>
        <button v-if="showDeleteButton" class="card__button-delete" @click="deleteCartItem">
          <i class="icon-delete" />
        </button>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'DishBrief',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    isMini: {
      type: Boolean,
      default: false
    },
    isDescription: {
      type: Boolean,
      default: true
    },
    isMiniButtonBuy: {
      type: Boolean,
      default: false
    },
    showDeleteButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      quantity: 1,
      preview: ''
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.dishes
    }),
    isProductAdded () {
      return typeof this.cart.find(dish => dish.id === this.data.id) !== 'undefined'
    },
    titleButtonBuy () {
      if (this.isMiniButtonBuy) {
        return ''
      } else if (this.isProductAdded) {
        return 'В корзине'
      } else {
        return 'В корзину'
      }
    }
  },
  mounted () {
    if (this.data.image !== null) {
      this.preview = this.$config.appImagesUrl + '/thumbnail/' + this.data.image.file_name
    } else {
      this.preview = this.$config.appImagesUrl + '/no-image.jpg'
    }
    if (this.isProductAdded) {
      this.quantity = this.cart.find(dish => dish.id === this.data.id).quantity
    }
  },
  methods: {
    ...mapActions({
      addDish: 'cart/addDish',
      removeDish: 'cart/removeDish',
      setQuantityDish: 'cart/setQuantityDish'
    }),
    quantityUp () {
      this.quantity++
      if (this.isProductAdded) {
        this.setQuantityDish({ product: this.data, quantity: this.quantity })
      }
    },
    quantityDown () {
      if (this.quantity !== 1) {
        this.quantity--
        if (this.isProductAdded) {
          this.setQuantityDish({ product: this.data, quantity: this.quantity })
        }
      }
    },
    buyClickHandler () {
      if (this.isProductAdded) {
        this.$router.push('/cart')
      } else {
        this.addDish({ product: this.data, quantity: this.quantity })
        this.$emit('addCartItem', this.data)
      }
    },
    deleteCartItem () {
      this.removeDish(this.data)
      this.$emit('deleteCartItem', this.data.id)
    }
  }
}
</script>

<style lang="scss">
.card {
  height: 100%;
  &__img {
    text-align: center;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin: 15px 0 15px 0;
  }

  &__name {
    text-transform: uppercase;
    color: #ed4b02;
    padding-right: 3px;
  }

  &__intro {
    font-size: 16px;
    margin-top: 15px;

    > a {
      color: #ed4b02;
    }
  }

  &__data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
  }

  &__count {
    font-weight: 400;
    font-size: 16px;
  }

  &__prices {
    font-weight: 500;
    color: #3cd52e;
    font-size: 24px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
  }

  .card__button-bay {
    height: 40px;
    padding: 4px 10px;
    width: auto;
  }

  &__button-delete {
    background: unset;
    border: none;
  }

  @include media-desktop {
    &__head {
      margin: 30px 0 30px 0;
    }

    &__name {
      font-size: 24px;
    }

    &__intro {
      margin-top: 15px;
      font-size: 18px;
    }

    &__data {
      margin: 30px 0;
    }

    &__count {
      font-size: 18px;
    }

    .card__button-bay {
      height: 60px;
    }
  }
}

.ingredients {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;

  &__col {
    padding: 0 8px;
    margin: 0 0 8px 0;
  }

  &__item {
    border: 1px solid #ff996a;
    border-radius: 4px;
    color: #ff996a;
    font-size: 16px;
    padding: 2px 10px;
  }
}

.button-count {
  border-radius: 8px;
  padding: 4px 10px;
  height: 40px;
  background: linear-gradient(180deg, rgba(255, 172, 134, 0.6) 0%, rgba(36, 36, 36, 0) 100%);
  display: flex;
  align-items: center;

  &__add,
  &__del,
  &__count {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: unset;
  }

  &__add {
    padding: 0 0 0 30px;
  }

  &__del {
    padding: 0 30px 0 0;
  }

  @include media-desktop {
    height: 60px;
    width: 168px;
    justify-content: space-between;

    &__add,
    &__del,
    &__count {
      font-size: 32px;
    }
  }
}

.card-mini {
  background: #181818;
  border-radius: 20px;
  padding: 12px;

  &__img {
    margin: 0 auto;
    display: block;
  }

  &__name {
    font-size: 18px;
  }

  &__intro {
    font-size: 16px;
  }

  .card-mini__buy {
    font-size: 20px;
  }

  @include media-tablet {
    padding: 30px 12px;
  }

  @include media-desktop {
    padding: 30px;

    &__head {
      margin: 15px 0;
    }

    &__data {
      margin: 15px 0;
    }

    &__count {
      width: auto;
      height: 48px;
    }

    .card-mini__buy {
      font-size: 24px;
      height: 48px;
    }
  }
}
</style>
