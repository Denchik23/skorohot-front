<template>
  <div class="size-pizza">
    <button
      v-for="item in this.currentDish.merge"
      :key="item.id"
      class="size-pizza__item"
      :class="{'size-pizza__item_active': item.weight === currentDish.weight}"
      @click="switchSize(item.weight)"
    >{{ dimensions.find(dimension => dimension.weight === item.weight).size }} см</button>
  </div>
</template>

<script>
export default {
  name: 'SwitchingPizzaSize',
  props: {
    currentDish: {
      type: Object,
      require: true,
      default () {
        return {}
      }
    },
    currentIndex: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      dimensions: [
        { size: '30', weight: 450 },
        { size: '35', weight: 700 },
        { size: '40', weight: 1000 }
      ]
    }
  },
  methods: {
    switchSize (weight) {
      if (this.currentDish.weight !== weight) {
        const dimension = this.currentDish.merge.find(dish => dish.weight === weight)
        if (typeof dimension !== 'undefined') {
          dimension.index = this.currentIndex
          this.$emit('switchSize', dimension)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.size-pizza {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 15px 0 15px 0;

  &__item {
    border: 1px solid #3cd52e;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    padding: 4px;
    font-weight: 500;
    background: none;
    width: 30%;
  }

  &__item_active {
    background: #3cd52e;
  }
}
</style>
