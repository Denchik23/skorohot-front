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
          <button class="filter__button">Для детей</button>
          <button class="filter__button">Острое</button>
          <button class="filter__button">Без лука</button>
          <button class="filter__button filter__button_active">Я веган</button>
          <button class="filter__button filter__button_active">Без грибов</button>
          <button class="filter__button">Не ем свинину</button>
        </div>
        <catalog-in-pizza />
        <div class="card-list">
          <div
            class="card-list__col"
            v-for="(dish, index) in dishes"
            :key="dish.id">
            <catalog-dish-brief :data="dish">
              <switching-pizza-size
                v-if="dish.merge.length"
                :current-dish="dish"
                :current-index="index"
                @switchSize="switchSizePizza"/>
            </catalog-dish-brief>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SwitchingPizzaSize from '@/components/catalog/SwitchingPizzaSize'
export default {
  name: 'pitstsa',
  components: { SwitchingPizzaSize },
  data () {
    return {
      dishes: []
    }
  },
  computed: {
  },
  async asyncData ({ app, route, params, error, store }) {
    let dishes = []
    await store.dispatch('getCategoriesList')
      .then((response) => {
        const categoryId = response.filter(item => item.alias === 'pitstsa')
        dishes = store.dispatch('dish/getDishesByCategory', categoryId[0].id)
        // добавляем текущий размер пиццы
        dishes = dishes.map((dish) => {
          dish.merge.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            weight: dish.weight
          })
          dish.merge.sort((a, b) => { return a.weight - b.weight })
          return dish
        })
      })
      .catch(() => {
        return error({
          statusCode: 404,
          message: 'Категории не найдены или сервер не доступен'
        })
      })
    return { dishes }
  },
  methods: {
    switchSizePizza (switchSize) {
      if (typeof this.dishes[switchSize.index] === 'object') {
        const indexDish = switchSize.index
        this.dishes[indexDish].id = switchSize.id
        this.dishes[indexDish].name = switchSize.name
        this.dishes[indexDish].price = switchSize.price
        this.dishes[indexDish].weight = switchSize.weight
      }
    }
  }
}
</script>

<style scoped>

</style>
