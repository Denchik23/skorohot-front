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
      default: () => []
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

</style>
