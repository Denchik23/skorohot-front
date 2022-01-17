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
                  <catalog-dish-brief
                    is-mini
                    :is-description="false"
                    :data="dish"
                    :show-delete-button="true"
                    @deleteCartItem="deleteCartDish" />
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
    <section class="section-substrate">
      <div class="container">
        <div class="shopping-data">
          <div class="shopping-data__address substrate">
            <div class="section-title section-title_substrate">Адрес <span>доставки</span></div>
            <div class="form-item">
              <div class="radio-group">
                <div class="radio-group__item">
                  <input name="delivery" type="radio" id="delivery" checked="checked">
                  <label class="radio-group__button button" for="delivery">Доставка</label>
                </div>
                <div class="radio-group__item">
                  <input name="delivery" type="radio" id="pickup">
                  <label class="radio-group__button button" for="pickup">Самовывоз</label>
                </div>
              </div>
            </div>
            <div class="form-item">
              <select name="" class="base-input">
                <option value="0" selected="selected">Другой</option>
                <option value="129">Lorem ipsum 129 st 29</option>
                <option value="130">Lorem ipsum 130 st 30</option>
                <option value="150">Lorem ipsum 150 st 50</option>
              </select>
            </div>
            <div class="shopping-data__text">Адрес доставки</div>
            <div class="form-item">
              <label class="form-item__label">Улица</label>
              <input type="text" class="base-input" placeholder="ул. Владимирская">
            </div>
            <div class="shopping-data__flat">
              <div class="form-item">
                <label class="form-item__label">Дом</label>
                <input type="text" class="base-input" placeholder="д. 194">
              </div>
              <div class="form-item">
                <label class="form-item__label">Квартира</label>
                <input type="text" class="base-input" placeholder="кв. 506">
              </div>
              <div class="form-item">
                <label class="form-item__label">Этаж</label>
                <input type="text" class="base-input" placeholder="19">
              </div>
            </div>
            <div class="form-item">
              <label class="form-item__label">Комментарий</label>
              <textarea rows="5" class="base-input" placeholder="Домофон не включен, подъезд 3, убрать огурчики..."></textarea>
            </div>
            <div class="form-item">
              <label class="checkbox-custom">
                Сохранить адрес для дальнейших заказов
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="shopping-data__info substrate">
            <div class="section-title section-title_substrate">Основная <span>информация</span></div>
            <div class="form-item">
              <label class="form-item__label">Номер телефона <span class="required">*</span></label>
              <div class="input-icon">
                <input type="text" class="base-input" placeholder="+7 989 776-18-71" disabled="disabled">
                <i class="icon-edit"></i>
              </div>
            </div>
            <div class="form-item">
              <label class="form-item__label">Время доставки</label>
              <div class="radio-group">
                <div class="radio-group__item">
                  <input name="time" type="radio" id="fast" checked="checked">
                  <label class="radio-group__button button" for="fast">Как можно скорее</label>
                </div>
                <div class="radio-group__item">
                  <input name="time" type="radio" id="time">
                  <label class="radio-group__button button" for="time">Ко времени</label>
                </div>
              </div>
            </div>
            <div class="form-item">
              <label class="form-item__label">Способ оплаты</label>
              <div class="radio-group">
                <div class="radio-group__item">
                  <input name="pay" type="radio" id="cash" checked="checked">
                  <label class="radio-group__button button" for="cash">Наличными</label>
                </div>
                <div class="radio-group__item">
                  <input name="pay" type="radio" id="card">
                  <label class="radio-group__button button" for="card">Картой курьеру</label>
                </div>
              </div>
            </div>
            <div class="form-item">
              <label class="form-item__label">Применить промокод</label>
              <input type="text" class="base-input" placeholder="9873ExAm1PLE">
            </div>
            <div class="form-item">
              <label class="form-item__label">Оплатить часть бонусами</label>
              <div class="range-bonus">
                <div class="range-bonus__min">800</div>
                <div class="range-bonus__slider">
                  <input type="range" min="1" max="100" value="50" class="base-range">
                </div>
                <div class="range-bonus__max">10000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="total-amount">
          <div class="total-amount__title section-title section-title_substrate">сумма <span>заказа:</span></div>
          <div class="total-amount__sum">21 879 руб.</div>
          <button class="total-amount__button button button_shadow">Заказать</button>
        </div>
      </div>
    </section>
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
  async asyncData ({ app, route, params, error, store }) {
    const dishesRecommended = await store.dispatch('dish/getRecommendations')
    return { dishesRecommended }
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
          if (typeof response === 'object') {
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
    },
    addCartDish (dish) {
      this.dishes.push(dish)
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
.shopping-data {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__address,
  &__info {
    width: 100%;
    margin: 0 0 15px 0;
  }

  &__text {
    text-align: center;
  }

  &__flat {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;

    .form-item {
      margin: 0 4px 0 0;

      > label {
        text-align: center;
      }

      &:last-child {
        margin: 0;
      }
    }
  }

  @include media-tablet {
    &__address,
    &__info {
      width: 49%;
    }
  }

  @include media-laptop {
    &__flat .form-item {
      margin: 0 12px 0 0;
    }
  }

  @include media-desktop {
    &__text {
      font-size: 24px;
    }
  }
}
.range-bonus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 0 0;

  &__slider {
    width: 58%;
  }

  @include media-laptop {
    &__slider {
      width: 70%;
    }
  }

  @include media-desktop {
    margin: 30px 0 0 0;
  }
}

.total-amount {
  text-align: center;

  &__title {
    text-transform: uppercase;
  }

  &__sum {
    font-size: 32px;
    margin: 10px 0 20px 0;
  }

  @include media-mobile {
    width: 70%;
  }

  @include media-laptop {
    width: 49%;
  }
}
</style>
