<template>
  <section class="section-substrate">
    <div class="container">
      <div class="shopping-basket">
        <div class="section-title section-title_substrate">История <span>заказов!</span></div>
        <div v-if="data.length" class="shopping-basket__body">
          <profile-order-brief
            v-for="order in data"
            :key="order.id"
            :order="order"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'History',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
