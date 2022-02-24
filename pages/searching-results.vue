<template>
  <div>
    <main>
      <div class="container">
        <div class="menu">
          <div class="menu__links substrate">
            <div class="title"><span class="title_red">Результаты </span><span class="title_green">поиска</span></div>
          </div>
          <nuxt-link to="/search" class="menu__search substrate">
            <span>Поиск по ингредиентам</span>
            <div class="menu__chevron chevron"></div>
          </nuxt-link>
        </div>
      </div>
    </main>
    <section>
      <div class="container">
        <div v-if="dishes.length" class="card-list">
          <div
            v-for="dish in dishes"
            :key="dish.id"
            class="card-list__col"
          >
            <catalog-dish-brief :data="dish" />
          </div>
        </div>
        <div v-else class="intro intro_small">
          <strong>Ничего не найдено</strong>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'searching-results',
  async asyncData ({ app, route, params, error, store }) {
    const dishes = await store.dispatch('ingredient/searchByIngredients')
    return { dishes }
  },
  data () {
    return {
      dishes: []
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
