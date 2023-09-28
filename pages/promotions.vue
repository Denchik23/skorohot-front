<template>
  <div>
    <main class="section-substrate">
      <div class="container">
        <div class="title">
          Акции<br><span class="title_green">для вас</span>
        </div>
        <div class="card-list">
          <div
            v-for="dish in dishes"
            :key="dish.id"
            class="card-list__col"
          >
            <catalog-dish-brief :data="dish" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'promotions',
  asyncData ({ store, error }) {
    return store.dispatch('dish/getDishesByCategory', { categoryId: 8 }).then((data) => {
      return {
        dishes: data
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
      dishes: []
    }
  }
}
</script>

<style lang="scss">
</style>
