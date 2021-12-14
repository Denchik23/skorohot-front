<template>
  <div>
    <main class="section-substrate">
      <div class="container">
        <div class="shopping-basket">
          <div class="section-title section-title_substrate">Ваша <span>корзина</span></div>
          <client-only>
            <template v-if="dishes.length">
              <div class="shopping-basket__body">
                <div
                  class="shopping-basket__item"
                  v-for="dish in dishes"
                  :key="dish.id">
                  <catalog-dish-brief :is-mini="true" :data="dish" @deleteCartItem="deleteCartDish" />
                </div>
              </div>
              <div class="outcome">
                <div class="outcome__data">
                  <div class="outcome__total">Итого:</div>
                  <div class="outcome__prices">{{ total }} руб.<span>({{ dishes.length }} позиций)</span></div>
                </div>
                <div class="intention">
                  <i class="icon-intention"></i>
                  <span>Вам будет начислено 2&nbsp;990&nbsp;бонусов.</span>
                </div>
              </div>
            </template>
            <p v-else>Корзина пуста</p>
          </client-only>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ModalMixin from '~/mixins/ModalMixin'

export default {
  name: 'Cart',
  mixins: [
    ModalMixin
  ],
  computed: {
    ...mapState({
      cart: state => state.cart.dishes
    }),
    ...mapGetters({
      total: 'cart/getTotalWithSpaces'
    })
  },
  data () {
    return {
      dishes: []
    }
  },
  mounted () {
    const dishesId = this.cart.map((dish) => {
      return dish.id
    })
    if (dishesId.length) {
      this.getDishesByCategory(dishesId)
    }
  },
  methods: {
    ...mapActions({
      removeDish: 'cart/removeDish'
    }),
    getDishesByCategory (dishesId) {
      this.$store.dispatch('dish/getDishes', dishesId)
        .then((response) => {
          if (typeof response === 'object' && response.length !== 0) {
            if (response.length !== this.cart.length) {
              const cart = this.cart
              cart.forEach((item) => {
                const findCart = response.filter((cartItem) => { return cartItem.id === item.id })
                if (findCart.length === 0) {
                  this.removeDish(item)
                }
              })
            }
          }
          this.dishes = response
        }).catch((error) => {
          // this.$store.dispatch('cart/clear')
          let errorText = 'Ошибка запроса данных блюд. Обратитесь к администратору.'
          if (typeof error.response !== 'undefined' && typeof error.response.data.message !== 'undefined' &&
            error.response.data.message !== '') {
            errorText = error.response.data.message
          }
          this.showModalError(errorText)
        })
    },
    deleteCartDish (id) {
      this.dishes = this.dishes.filter((dish) => {
        return dish.id !== id
      })
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

.outcome {
  &__data {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px 0;
  }

  &__total {
    color: #ed4b02;
    font-size: 36px;
    font-weight: 700;
  }

  &__prices {
    color: #fff;
    font-size: 24px;
    font-weight: 700;

    > span {
      display: block;
      font-size: 18px;
      font-weight: 300;
      text-align: right;
    }
  }

  @include media-laptop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__data {
      width: 32%;
      margin: 0;
    }
  }

  @include media-desktop {
    &__data {
      width: 25%;
    }
  }
}
</style>
