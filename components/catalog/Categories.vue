<template>
  <div class="menu">
    <div class="menu__links substrate">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link class="menu__item" :to="`/catalog/${category.alias}`">
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Categories',
  computed: {
    ...mapState({
      categories: state => state.categoriesList
    })
  }
}
</script>

<style lang="scss">

</style>
