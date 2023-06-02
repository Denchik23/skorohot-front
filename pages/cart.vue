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
                  v-for="dish in dishes"
                  :key="dish.id"
                  class="shopping-basket__item"
                >
                  <catalog-dish-brief
                    is-mini
                    :is-description="false"
                    :data="dish"
                    :show-delete-button="true"
                    @deleteCartItem="deleteCartDish"
                  />
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
    <cart-recommendations :data="dishesRecommended" @addCartItem="addCartDish"/>
    <client-only>
      <cart-order-form v-if="cart.length && $auth.loggedIn"/>
      <cart-login-required v-else-if="!$auth.loggedIn" />
    </client-only>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ModalMixin from '~/mixins/ModalMixin'

export default {
  name: 'cart',
  mixins: [
    ModalMixin
  ],
  asyncData ({ app, route, params, error, store }) {
    return store.dispatch('dish/getRecommendations').then((data) => {
      return { dishesRecommended: data }
    }).catch((errorMessage) => {
      console.log(errorMessage)
    })
  },
  data () {
    return {
      dishes: [],
      dishesRecommended: []
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.dishes
    }),
    ...mapGetters({
      total: 'cart/getTotalWithSpaces'
    })
  },
  mounted () {
    const dishesId = this.cart.map((dish) => {
      return dish.id
    })
    if (dishesId.length) {
      this.$store.dispatch('dish/getDishes', dishesId).then((response) => {
        if (response.length !== this.cart.length) {
          const cart = this.cart
          cart.forEach((item) => {
            const findCart = response.filter((cartItem) => { return cartItem.id === item.id })
            if (findCart.length === 0) {
              this.removeDish(item)
            }
          })
        }
        this.dishes = response
      }).catch((errorMessage) => {
        this.showModalError(errorMessage)
      })
    }
  },
  methods: {
    ...mapActions({
      removeDish: 'cart/removeDish'
    }),
    deleteCartDish (id) {
      this.dishes = this.dishes.filter((dish) => {
        return dish.id !== id
      })
    },
    addCartDish (dish) {
      this.dishes.push(dish)
    }
  }
}
</script>

<style lang="scss">
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
