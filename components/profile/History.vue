<template>
  <section class="section-substrate">
    <div class="container">
      <div class="shopping-basket">
        <div class="section-title section-title_substrate">
          История <span>заказов!</span>
        </div>
        <div v-if="orders.length" class="shopping-basket__body">
          <profile-order-brief
            v-for="order in orders"
            :key="order.id"
            :order="order"
          />
        </div>
        <ui-base-pagination
          v-if="pagination.nextPageUrl || pagination.prevPageUrl"
          :data="pagination"
          @clickHandler="getCompletedOrders"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import ModalMixin from '@/mixins/ModalMixin'

export default {
  name: 'History',
  mixins: [
    ModalMixin
  ],
  data () {
    return {
      orders: [],
      pagination: {
        nextPageUrl: null,
        prevPageUrl: null,
        currentPage: 0
      }
    }
  },
  computed: {
  },
  created () {
    this.getCompletedOrders()
  },
  methods: {
    ...mapActions({
      getOrders: 'order/getOrders'
    }),
    getCompletedOrders (page = 1) {
      this.getOrders(page).then((data) => {
        this.orders = data.data
        this.pagination.nextPageUrl = data.links.next
        this.pagination.prevPageUrl = data.links.prev
        this.pagination.currentPage = data.meta.current_page
      }).catch((errorMessage) => {
        this.showModalError(errorMessage)
      })
    }
  }
}
</script>
