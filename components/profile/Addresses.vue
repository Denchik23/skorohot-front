<template>
  <div class="profile-address substrate">
    <div class="section-title section-title_substrate">Адрес <span>доставки</span></div>
    <div class="profile-address__wrapper">
      <div
        class="profile-address__item"
        v-for="address in addresses"
        :key="address.id"
      >
        <div class="profile-address__body">
          <span>{{ address.name }}</span>
          {{ addressString(address) }}
        </div>
        <div class="profile-address__edit">
          <button @click="showAddressModal(address)"><i class="icon-edit"></i></button>
        </div>
      </div>
    </div>
    <button class="button button_green" @click="showAddressModal()">Добавить адрес</button>
    <modal-base-modal name="modal-address" title="Адрес">
      <ui-form-item
        label="Название"
        :error="$v.data.name.$error"
        required
      >
        <input v-model="$v.data.name.$model" type="text" class="base-input" placeholder="Дом">
        <template #error>
          <small v-if="!$v.data.name.required">Обязательное поле</small>
        </template>
      </ui-form-item>
      <ui-form-item
        label="Улица"
        :error="$v.data.street.$error"
        required
      >
        <input v-model="$v.data.street.$model" type="text" class="base-input" placeholder="Гоголя">
        <template #error>
          <small v-if="!$v.data.street.required">Обязательное поле</small>
        </template>
      </ui-form-item>
      <div class="shopping-data__flat">
        <ui-form-item
          label="Дом"
          :error="$v.data.house.$error"
          required
        >
          <input v-model="$v.data.house.$model" type="text" class="base-input" placeholder="15а">
          <template #error>
            <small v-if="!$v.data.house.required">Обязательное поле</small>
          </template>
        </ui-form-item>
        <ui-form-item
          label="Квартира"
          :error="$v.data.apartment.$error"
        >
          <input v-model="$v.data.apartment.$model" type="text" class="base-input" placeholder="156">
        </ui-form-item>
        <ui-form-item
          label="Этаж"
          :error="$v.data.floor.$error"
        >
          <input v-model="$v.data.floor.$model" type="text" class="base-input" placeholder="1">
        </ui-form-item>
      </div>
      <ui-base-button
        class="modal__button"
        title="Сохранить"
        :error="errorButton"
        :loader="loaderButton"
        @click="saveAddress"
      />
    </modal-base-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { maxLength, required } from 'vuelidate/lib/validators'
import ModalMixin from '@/mixins/ModalMixin'
import FormMixin from '@/mixins/FormMixin'

export default {
  name: 'Addresses',
  mixins: [
    FormMixin,
    ModalMixin
  ],
  data () {
    return {
      data: null,
      defaultData: {
        name: '',
        street: '',
        house: '',
        apartment: '',
        floor: ''
      }
    }
  },
  validations () {
    return {
      data: {
        name: {
          required
        },
        street: {
          required
        },
        house: {
          required
        },
        apartment: {
          maxLength: maxLength(50)
        },
        floor: {
          maxLength: maxLength(50)
        }
      }
    }
  },
  computed: {
    ...mapState({
      addresses: state => state.address.addresses
    })
  },
  methods: {
    ...mapActions({
      getAddresses: 'address/fetchList',
      store: 'address/store',
      update: 'address/update'
    }),
    addressString (address) {
      let addressStr = 'ул. ' + address.street + ' ' + address.house
      if (address.apartment) {
        addressStr = addressStr + ', кв ' + address.apartment
      }
      if (address.floor) {
        addressStr = addressStr + ', этаж ' + address.floor
      }
      return addressStr
    },
    showAddressModal (data = false) {
      if (data !== false) {
        this.data = Object.assign({}, data)
      } else {
        this.formCleaning()
      }
      this.$modal.show('modal-address')
    },
    saveAddress () {
      if (!this.beforeSubmit()) {
        return
      }
      const action = typeof this.data.id !== 'undefined' ? 'update' : 'store'
      this[action](this.data).finally(() => {
        this.loaderButton = false
      }).then(() => {
        this.$modal.hide('modal-address')
        this.formCleaning()
      }).catch((error) => {
        this.showModalError(this.getResponseErrorMessage(error.response))
      })
    }
  },
  created () {
    this.getAddresses()
      .catch((error) => {
        this.showModalError(this.getResponseErrorMessage(error.response))
      })
  }
}
</script>

<style lang="scss">
.profile-address {
  width: 100%;
  &__wrapper {
    max-height: 497px;
    overflow: auto;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
  }

  &__body {
    > span {
      display: block;
      font-weight: bold;
    }
  }

  &__edit {
    > button {
      border: none;
      background: unset;
      padding: 0 0 8px 15px;
    }
  }

  @include media-laptop {
    width: 36%;

    &__item {
      margin: 35px 0;
    }
  }
}
</style>
