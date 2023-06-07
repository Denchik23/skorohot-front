<template>
  <div>
    <div class="section-title section-title_substrate">
      Ваших бонусов <span>достаточно&nbsp;для:</span>
    </div>
    <div class="profile__card-body shopping-basket__body">
      <div
        v-for="dish in data"
        :key="dish.id"
        class="profile__card-item shopping-basket__item"
      >
        <catalog-dish-brief
          is-mini
          is-mini-button-buy
          :is-description="false"
          :data="dish"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BonusesEnough',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
