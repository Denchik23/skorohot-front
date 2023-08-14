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
            :class="{'filter__button_active': filter.active }"
            @click="toggleFilter(filter.id)"
          >
            {{ filter.name }}
          </button>
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
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  asyncData ({ route, error, store }) {
    let dishes = []
    return store.dispatch('getCategoriesList').then((data) => {
      const categoryId = data.filter(item => item.alias === route.params.CatalogSlug)
      return store.dispatch('dish/getDishesByCategory', { categoryId: categoryId[0].id, filter: [] })
    }).then((data) => {
      dishes = data
      return store.dispatch('filter/fetchList')
    }).then((data) => {
      let filters = []
      if (route.params.CatalogSlug === 'yaponskaya-kuhnya') {
        filters = data.filter(item => item.filter_category_id === 2)
      }
      return {
        dishes,
        filters
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
      filters: []
    }
  },
  methods: {
    ...mapActions({
      getCategoriesList: 'getCategoriesList',
      getDishesByCategory: 'dish/getDishesByCategory'
    }),
    toggleFilter (filterId) {
      const i = this.filters.findIndex(item => item.id === filterId)
      this.filters.map((item) => {
        if (item.id !== filterId) {
          item.active = false
        }
        return item
      })
      this.filters[i].active = !this.filters[i].active
      const filter = this.filters[i].active ? [filterId] : []
      this.getCategoriesList().then((data) => {
        const categoryId = data.filter(item => item.alias === 'yaponskaya-kuhnya')
        return this.getDishesByCategory({ categoryId: categoryId[0].id, filter })
      }).then((data) => {
        this.dishes = data
      }).catch((errorMessage) => {
        this.showModalError(errorMessage)
      })
    }
  }
}
</script>

<style lang="scss">
.filter {
  display: flex;
  justify-content: normal;
  flex-wrap: wrap;

  &__button {
    font-family: "Roboto", sans-serif;
    display: block;
    text-align: center;
    background: #1c1c1c;
    box-shadow: 0 5px 10px 2px rgba(35, 35, 35, 0.5);
    padding: 8px 20px;
    transition: all .2s linear;
    outline: none;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 400;
    border: none;
    color: #fff;
    margin: 0 10px 10px 0;

    &:last-child {
      margin: 0 0 10px 0;
    }
  }

  &__button_active {
    background: linear-gradient(180deg, #ff5000 15.42%, #ff8a00 100%);
    box-shadow: 0 0 25px 6px rgba(255, 80, 0, 0.4);
  }

  @include media-laptop {
    justify-content: space-between;
    margin: 0 0 30px 0;

    &__button {
      margin: 0 10px 0 0;
      font-size: 22px;
      padding: 8px 28px;

      &:last-child {
        margin: 0;
      }
    }
  }

  @include media-desktop {
    &__button {
      font-size: 24px;
      padding: 8px 50px;
    }
  }
}
</style>
