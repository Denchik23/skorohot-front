<template>
  <section>
    <div class="container">
      <div class="section-title">Быстрое <span>меню</span></div>
      <div class="section-intro">Все самое нужное прямо перед глазами на самой главной странице ;)</div>
      <div class="fast-menu">
        <div class="fast-menu__col">
          <div class="fast-menu__item substrate">
            <div class="fast-menu__icon">
              <img src="~/assets/img/pizza.svg" alt="icon">
            </div>
            <div class="fast-menu__data">
              <div class="fast-menu__title"><span>Пицца</span><br>Горячая, вкусная и сочная</div>
              <nuxt-link to="/catalog/pitstsa" class="button-link" />
            </div>
          </div>
        </div>
        <div class="fast-menu__col">
          <div class="fast-menu__item substrate">
            <div class="fast-menu__icon">
              <img src="~/assets/img/rolls.svg" alt="icon">
            </div>
            <div class="fast-menu__data">
              <div class="fast-menu__title"><span>Роллы</span><br>Много вкусной начинки</div>
              <nuxt-link to="/catalog/yaponskaya-kuhnya" class="button-link" />
            </div>
          </div>
        </div>
        <div class="fast-menu__col">
          <div class="fast-menu__item substrate">
            <div class="fast-menu__icon">
              <img src="~/assets/img/sushi.svg" alt="icon">
            </div>
            <div class="fast-menu__data">
              <div class="fast-menu__title"><span>Сеты и комбо</span><br>Горячая, вкусная и сочная</div>
              <nuxt-link to="/catalog/pitstsa" class="button-link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuickMenu'
}
</script>

<style lang="scss">
.fast-menu {
  &__col {
    margin-bottom: 30px;
  }

  &__icon {
    text-align: center;
    margin-bottom: 15px;

    > img {
      width: 150px;
    }
  }

  &__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    > span {
      font-weight: bold;
      color: #3cd52e;
    }
  }

  @include media-tablet {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-around;

    &__col {
      width: 45%;
    }
  }

  @include media-laptop {
    justify-content: space-between;

    &__col {
      width: 30%;
    }
  }

  @include media-desktop {
    &__col {
      width: 366px;
    }

    &__icon {
      > img {
        width: auto;
      }
    }

    &__title {
      line-height: 30px;
      > span {
        font-size: 36px;
      }
    }
  }
}
</style>
