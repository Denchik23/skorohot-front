<template>
  <div>
    <section class="section-substrate">
      <div class="container">
        <div class="shopping-data">
          <div class="shopping-data__address substrate">
            <div class="section-title section-title_substrate">Адрес <span>доставки</span></div>
            <ui-base-radio-group name="delivery" :options="deliveryOptions" v-model="data.deliveryType"/>
            <template v-if="data.deliveryType === 'delivery'">
              <ui-select-address
                name="address"
                v-if="addressesUser.length"
                :options="addressesUser"
                v-model="data.address.id" />
              <div class="shopping-data__text">Адрес доставки</div>
              <ui-form-item label="Улица" required :error="$v.data.address.street.$error">
                <input
                  type="text"
                  class="base-input"
                  placeholder="Владимирская"
                  v-model="$v.data.address.street.$model"
                  :disabled="isDisabledAddress">
                <template #error>
                  <small v-if="!$v.data.address.street.required">Обязательное поле</small>
                </template>
              </ui-form-item>
              <div class="shopping-data__flat">
                <ui-form-item label="Дом" required :error="$v.data.address.house.$error">
                  <input
                    type="text"
                    class="base-input"
                    placeholder="194"
                    v-model="$v.data.address.house.$model"
                    :disabled="isDisabledAddress">
                  <template #error>
                    <small v-if="!$v.data.address.house.required">Обязательное поле</small>
                  </template>
                </ui-form-item>
                <ui-form-item label="Квартира" :error="$v.data.address.apartment.$error">
                  <input
                    type="text"
                    class="base-input"
                    placeholder="506"
                    v-model="$v.data.address.apartment.$model"
                    :disabled="isDisabledAddress">
                </ui-form-item>
                <ui-form-item label="Этаж" :error="$v.data.address.floor.$error">
                  <input
                    type="text"
                    class="base-input"
                    placeholder="19"
                    v-model="$v.data.address.floor.$model"
                    :disabled="isDisabledAddress">
                </ui-form-item>
              </div>
            </template>
            <template v-else>
              <div class="shopping-data__text">Забрать заказ вы можете по адресу:</div>
              <div class="form-item">
                <label class="form-item__label">г. Анапа, ул. Омелькова, 21 / ул. Владимирская, 134</label>
              </div>
            </template>
            <ui-form-item label="Комментарий" :error="$v.data.comment.$error">
              <textarea
                rows="5"
                class="base-input"
                placeholder="Домофон не включен, подъезд 3, убрать огурчики..."
                v-model="$v.data.comment.$model"
              ></textarea>
            </ui-form-item>
            <ui-base-checkbox
              label="Сохранить адрес для дальнейших заказов"
              v-model="$v.data.isAddressSave.$model"
            />
          </div>
          <div class="shopping-data__info substrate">
            <div class="section-title section-title_substrate">Основная <span>информация</span></div>
            <ui-form-item label="Номер телефона" required :error="$v.data.phone.$error">
              <div class="input-icon">
                <input
                  type="text"
                  class="base-input"
                  placeholder="+7 989 776-18-71"
                  v-model="$v.data.phone.$model"
                  disabled="disabled">
                <i class="icon-edit"></i>
              </div>
              <template #error>
                <small v-if="!$v.data.phone.required">Обязательное поле</small>
                <small v-if="!$v.data.phone.isPhone">Некорректный телефон</small>
              </template>
            </ui-form-item>
            <ui-base-radio-group
              label="Время доставки"
              name="delivery-time"
              :options="timeOptions"
              v-model="data.deliveryTime"
            />
            <ui-base-select
              v-if="data.deliveryTime === 'time'"
              name="time"
              :options="timeList"
              v-model="data.time" />
            <ui-base-radio-group
              label="Способ оплаты"
              name="pay"
              :options="paymentOptions"
              v-model="data.paymentMethod"
            />
            <ui-form-item label="Применить промокод" :error="$v.data.promoCode.$error">
              <input
                type="text"
                class="base-input"
                placeholder="9873ExAm1PLE"
                v-model="$v.data.promoCode.$model">
            </ui-form-item>
            <ui-form-item label="Оплатить часть бонусами" :error="$v.data.bonus.$error">
              <div class="range-bonus">
                <div class="range-bonus__min">0</div>
                <div class="range-bonus__slider">
                  <input
                    class="base-range"
                    type="range"
                    min="0"
                    max="100"
                    v-model="$v.data.bonus.$model"
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
          <div class="total-amount__title section-title section-title_substrate">сумма <span>заказа:</span></div>
          <div class="total-amount__sum">{{ total.toLocaleString() }} руб.</div>
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
import FormMixin from '@/mixins/FormMixin'
import ModalMixin from '@/mixins/ModalMixin'
import { isPhone } from '@/utils/validationUtils'
import { deliveryOptions, timeOptions, timeList, paymentOptions } from '@/vocabularies/deliveryOptions'

export default {
  name: 'OrderForm',
  mixins: [
    FormMixin,
    ModalMixin
  ],
  data () {
    return {
      addressesUser: [],
      deliveryOptions,
      timeOptions,
      timeList,
      paymentOptions,
      isDisabledAddress: false,
      data: null,
      defaultData: {
        deliveryType: 'delivery',
        address: {
          id: 0,
          street: '',
          house: '',
          apartment: '',
          floor: ''
        },
        comment: '',
        isAddressSave: false,
        phone: '9892443390',
        deliveryTime: 'fast',
        time: '10:30',
        paymentMethod: 'cash',
        promoCode: '',
        bonus: 0,
        amount: 0
      }
    }
  },
  validations () {
    return {
      data: {
        dishes: [],
        address: {
          id: {
            required
          },
          street: {
            required: requiredIf(() => this.data.deliveryType === 'delivery')
          },
          house: {
            required: requiredIf(() => this.data.deliveryType === 'delivery'),
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
        isAddressSave: {},
        phone: {
          required,
          isPhone
        },
        promoCode: {},
        bonus: {
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
      return currentBasket - this.data.bonus
    }
  },
  watch: {
    'data.address.id' (value) {
      if (value === 0) {
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
  methods: {
    getUserAddresses () {
      this.$store.dispatch('order/getUserAddresses')
        .then((response) => {
          if (response.length) {
            this.addressesUser = response
            this.addressesUser.unshift({
              id: 0,
              street: 'Другой',
              apartment: 'адрес'
            })
            // устанавливаем адрес если он одни
            if (response.length >= 2) {
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
      this.data.amount = this.total
      console.log(this.data)
    }
  },
  created () {
    this.getUserAddresses()
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
