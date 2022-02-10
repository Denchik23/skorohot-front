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
    <nuxt-link to="/search" class="menu__search substrate">
      <span>Поиск по ингредиентам</span>
      <div class="menu__chevron chevron"></div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Categories',
  computed: {
    ...mapState({
      categories: 'categoriesList'
    })
  }
}
</script>

<style lang="scss">
.menu {
  &__links {
    padding: 8px 12px;

    > ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      justify-content: normal;
      flex-wrap: wrap;

      > li {
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  &__item {
    color: #fff;
    padding: 8px 0;
    display: block;
  }

  .nav__link_active {
    background: url("~assets/img/ellipse.svg") no-repeat right;
    padding-right: 8px;
    font-weight: 500;
    border-bottom: none;
  }

  &__search {
    padding: 8px 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0 0 0;
  }

  &__chevron {
    margin-left: 15px;
    box-shadow: 0 0 25px 6px rgba(255, 80, 0, 0.4);
  }

  @include media-mobile {
    &__links {
      > ul {
        justify-content: space-between;
      }
    }
  }

  @include media-laptop {
    display: flex;
    justify-content: space-between;

    &__links,
    &__search {
      height: 65px;
    }

    &__links {
      width: 75%;
    }

    &__item {
      font-size: 22px;
    }

    &__search {
      font-size: 22px;
      line-height: 23px;
      font-weight: 500;
      margin: 0;

      > span {
        width: 160px;
      }
    }
  }

  @include media-desktop {
    &__links,
    &__search {
      height: 76px;
      padding: 12px 30px;
    }

    &__links {
      width: 70%;
    }

    &__item {
      font-size: 24px;
    }

    &__search {
      font-size: 24px;

      > span {
        width: auto;
      }
    }
  }
}
.chevron {
  position: relative;
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(142.91deg, #ff5000 37.07%, #ff8a00 91.03%);

  &::before {
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: inline-block;
    height: 15px;
    width: 15px;
    position: absolute;
    top: 10px;
    left: 7px;
    transform: rotate(45deg);
  }
}
</style>
