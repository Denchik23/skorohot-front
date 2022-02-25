<template>
  <div>
    <section class="section-substrate">
      <div class="container">
        <div class="shopping-data">
          <div class="shopping-data__address substrate">
            <div class="section-title section-title_substrate">
              Адрес <span>доставки</span>
            </div>
            <ui-base-radio-group v-model="data.delivery" name="delivery" :options="deliveryOptions" />
            <template v-if="data.delivery">
              <ui-select-address
                v-if="addressesUser.length"
                v-model="data.address.id"
                name="address"
                :options="addressesUser"
              />
              <div class="shopping-data__text">
                Адрес доставки
              </div>
              <ui-form-item label="Улица" required :error="$v.data.address.street.$error">
                <input
                  v-model="$v.data.address.street.$model"
                  type="text"
                  class="base-input"
                  placeholder="Владимирская"
                  :disabled="isDisabledAddress"
                >
                <template #error>
                  <small v-if="!$v.data.address.street.required">Обязательное поле</small>
                </template>
              </ui-form-item>
              <div class="shopping-data__flat">
                <ui-form-item label="Дом" required :error="$v.data.address.house.$error">
                  <input
                    v-model="$v.data.address.house.$model"
                    type="text"
                    class="base-input"
                    placeholder="194"
                    :disabled="isDisabledAddress"
                  >
                  <template #error>
                    <small v-if="!$v.data.address.house.required">Обязательное поле</small>
                  </template>
                </ui-form-item>
                <ui-form-item label="Квартира" :error="$v.data.address.apartment.$error">
                  <input
                    v-model="$v.data.address.apartment.$model"
                    type="text"
                    class="base-input"
                    placeholder="506"
                    :disabled="isDisabledAddress"
                  >
                </ui-form-item>
                <ui-form-item label="Этаж" :error="$v.data.address.floor.$error">
                  <input
                    v-model="$v.data.address.floor.$model"
                    type="text"
                    class="base-input"
                    placeholder="19"
                    :disabled="isDisabledAddress"
                  >
                </ui-form-item>
              </div>
            </template>
            <template v-else>
              <div class="shopping-data__text">
                Забрать заказ вы можете по адресу:
              </div>
              <div class="form-item">
                <label class="form-item__label">г. Анапа, ул. Омелькова, 21 / ул. Владимирская, 134</label>
              </div>
            </template>
            <ui-form-item label="Комментарий" :error="$v.data.comment.$error">
              <textarea
                v-model="$v.data.comment.$model"
                rows="5"
                class="base-input"
                placeholder="Домофон не включен, подъезд 3, убрать огурчики..."
              />
            </ui-form-item>
            <ui-base-checkbox
              v-if="data.delivery"
              v-model="$v.data.address.active.$model"
              label="Сохранить адрес для дальнейших заказов"
            />
          </div>
          <div class="shopping-data__info substrate">
            <div class="section-title section-title_substrate">
              Основная <span>информация</span>
            </div>
            <ui-form-item label="Номер телефона" required>
              <div class="input-icon">
                <the-mask
                  id="phone"
                  ref="phone"
                  v-model="phone"
                  name="phone"
                  mask="+7 (###) ###-##-##"
                  class="base-input"
                  placeholder="+7 (999) 888-77-55"
                  type="tel"
                  disabled="disabled"
                />
                <i class="icon-edit" />
              </div>
            </ui-form-item>
            <ui-base-radio-group
              v-model="data.delivery_time"
              label="Время доставки"
              name="delivery-time"
              :options="timeOptions"
            />
            <ui-base-select
              v-if="data.delivery_time === 'time'"
              v-model="data.time"
              name="time"
              :options="timeList"
            />
            <ui-base-radio-group
              v-model="data.payment"
              label="Способ оплаты"
              name="pay"
              :options="paymentOptions"
            />
            <ui-form-item label="Применить промокод" :error="$v.data.promo_code.$error">
              <input
                v-model="$v.data.promo_code.$model"
                type="text"
                class="base-input"
                placeholder="9873ExAm1PLE"
              >
            </ui-form-item>
            <ui-form-item label="Оплатить часть бонусами" :error="$v.data.score.$error">
              <div class="range-bonus">
                <div class="range-bonus__min">0</div>
                <div class="range-bonus__slider">
                  <input
                    v-model="$v.data.score.$model"
                    class="base-range"
                    type="range"
                    min="0"
                    max="100"
                  >
                </div>
                <div class="range-bonus__max">1000</div>
              </div>
            </ui-form-item>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="total-amount">
          <div class="total-amount__title section-title section-title_substrate">
            сумма <span>заказа:</span>
          </div>
          <div class="total-amount__sum">
            {{ total.toLocaleString() }} руб.
          </div>
          <ui-base-button
            class="total-amount__button button_shadow"
            title="Заказать"
            :error="errorButton"
            :loader="loaderButton"
            @click="order"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { maxLength, required, requiredIf } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import FormMixin from '@/mixins/FormMixin'
import ModalMixin from '@/mixins/ModalMixin'
import { deliveryOptions, timeOptions, timeList, paymentOptions } from '@/vocabularies/deliveryOptions'

export default {
  name: 'OrderForm',
  mixins: [
    FormMixin,
    ModalMixin
  ],
  components: {
    TheMask
  },
  data () {
    return {
      addressesUser: [],
      deliveryOptions,
      timeOptions,
      timeList,
      paymentOptions,
      isDisabledAddress: false,
      phone: this.$auth.user.phone,
      data: null,
      defaultData: {
        dishes: [],
        delivery: 1,
        address: {
          id: null,
          active: true,
          street: '',
          house: '',
          apartment: '',
          floor: ''
        },
        comment: '',
        delivery_time: 'fast',
        time: '10:30',
        payment: 'cash',
        promo_code: '',
        score: 0,
        sum: 0,
        source: 'site'
      }
    }
  },
  validations () {
    return {
      data: {
        address: {
          id: {},
          active: {},
          street: {
            required: requiredIf(() => this.data.delivery)
          },
          house: {
            required: requiredIf(() => this.data.delivery),
            maxLength: maxLength(50)
          },
          apartment: {
            maxLength: maxLength(50)
          },
          floor: {
            maxLength: maxLength(50)
          }
        },
        comment: {
          maxLength: maxLength(250)
        },
        promo_code: {},
        score: {
          required
        }
      }
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.dishes
    }),
    total () {
      const currentBasket = this.$store.getters['cart/getTotal']
      return currentBasket - this.data.score
    }
  },
  watch: {
    'data.address.id' (value) {
      if (value === null) {
        this.data.address.street = ''
        this.data.address.house = ''
        this.data.address.apartment = ''
        this.data.address.floor = ''
        this.isDisabledAddress = false
      } else {
        Object.assign(this.data.address, this.addressesUser.find(item => (item.id === value)))
        this.isDisabledAddress = true
      }
    }
  },
  created () {
    this.getUserAddresses()
  },
  methods: {
    getUserAddresses () {
      this.$store.dispatch('address/fetchList')
        .then((response) => {
          if (response.length) {
            this.addressesUser = response.map((item) => { delete item.name; return item })
            this.addressesUser.unshift({
              id: null,
              street: 'Другой',
              apartment: 'адрес'
            })
            // устанавливаем адрес если он одни
            if (response.length > 1) {
              this.data.address.id = response[1].id
              this.isDisabledAddress = true
            }
          }
        }).catch((error) => {
          this.showModalError(this.getResponseErrorMessage(error.response))
        })
    },
    order () {
      if (!this.beforeSubmit()) {
        return
      }
      this.data.dishes = this.cart.map((item) => { return { id: item.id, quantity: item.quantity } })
      this.data.sum = this.total
      this.$store.dispatch('order/send', this.data)
        .finally(() => {
          this.loaderButton = false
        })
        .then((response) => {
          if (typeof response.success !== 'undefined' && response.success) {
            this.$router.push('/thanks')
            this.$store.dispatch('cart/clear')
          }
        }).catch((error) => {
          this.showModalError(this.getResponseErrorMessage(error.response))
        })
    }
  }
}
</script>

<style lang="scss">
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
