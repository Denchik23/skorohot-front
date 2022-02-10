<template>
  <div>
    <main>
      <div class="container">
        <catalog-categories />
      </div>
    </main>
    <section>
      <div class="container">
        <div class="card-list">
          <div
            class="card-list__col"
            v-for="dish in dishes"
            :key="dish.id">
            <catalog-dish-brief :data="dish" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dishes: []
    }
  },
  computed: {
  },
  async asyncData ({ app, route, params, error, store }) {
    await store.dispatch('getCategoriesList').catch(() => {
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    })
    const categoryId = store.state.categoriesList.filter(item => item.alias === route.params.CatalogSlug)
    const dishes = await store.dispatch('dish/getDishesByCategory', categoryId[0].id)
    return { dishes }
  },
  methods: {
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

.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 30px -15px 0 -15px;

  &__col {
    padding: 0 15px;
    width: 100%;
    margin: 0 0 30px 0;

    &:last-child {
      margin: 0;
    }
  }

  @include media-tablet {
    &__col {
      width: 50%;
    }
  }

  @include media-laptop {
    &__col {
      width: 33.3%;
    }
  }
}
</style>
