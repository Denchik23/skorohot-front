<template>
  <div>
    <main>
      <div class="container">
        <catalog-categories />
      </div>
    </main>
    <section>
      <div class="container">
        <div class="filter">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="filter__button"
            :class="{'filter__button_active': selectedFilters.includes(filter.id) }"
            @click="toggleFilter(filter.id)"
          >
            {{ filter.name }}
          </button>
        </div>
        <catalog-in-pizza />
        <div class="card-list">
          <div
            v-for="(dish, index) in dishes"
            :key="dish.id"
            class="card-list__col"
          >
            <catalog-dish-brief :data="dish">
              <switching-pizza-size
                v-if="dish.merge.length"
                :current-dish="dish"
                :current-index="index"
                @switchSize="switchSizePizza"
              />
            </catalog-dish-brief>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SwitchingPizzaSize from '@/components/catalog/SwitchingPizzaSize'
export default {
  name: 'Pitstsa',
  components: { SwitchingPizzaSize },
  asyncData ({ error, store }) {
    let dishes = []
    return store.dispatch('getCategoriesList').then((data) => {
      const categoryId = data.filter(item => item.alias === 'pitstsa')
      return store.dispatch('dish/getDishesByCategory', { categoryId: categoryId[0].id, filter: [] })
    }).then((data) => {
      dishes = data.map((dish) => {
        dish.merge.push({
          id: dish.id,
          name: dish.name,
          price: dish.price,
          weight: dish.weight
        })
        dish.merge.sort((a, b) => { return a.weight - b.weight })
        return dish
      })
      return store.dispatch('filter/fetchList')
    }).then((data) => {
      return {
        dishes,
        filters: data
      }
    }).catch((errorMessage) => {
      return error({
        statusCode: 404,
        message: errorMessage
      })
    })
  },
  data () {
    return {
      dishes: [],
      filters: [],
      selectedFilters: []
    }
  },
  computed: {
  },
  methods: {
    ...mapActions({
      getCategoriesList: 'getCategoriesList',
      getDishesByCategory: 'dish/getDishesByCategory'
    }),
    switchSizePizza (switchSize) {
      if (typeof this.dishes[switchSize.index] === 'object') {
        const indexDish = switchSize.index
        this.dishes[indexDish].id = switchSize.id
        this.dishes[indexDish].name = switchSize.name
        this.dishes[indexDish].price = switchSize.price
        this.dishes[indexDish].weight = switchSize.weight
      }
    },
    toggleFilter (filterId) {
      const i = this.selectedFilters.findIndex(val => val === filterId)
      if (i !== -1) {
        this.selectedFilters.splice(i, 1)
      } else {
        this.selectedFilters.push(filterId)
      }
      this.getCategoriesList().then((data) => {
        const categoryId = data.filter(item => item.alias === 'pitstsa')
        return this.getDishesByCategory({ categoryId: categoryId[0].id, filter: this.selectedFilters })
      }).then((data) => {
        this.dishes = data.map((dish) => {
          dish.merge.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            weight: dish.weight
          })
          dish.merge.sort((a, b) => { return a.weight - b.weight })
          return dish
        })
      }).catch((errorMessage) => {
        this.showModalError(errorMessage)
      })
    }
  }
}
</script>

<style scoped>

</style>
