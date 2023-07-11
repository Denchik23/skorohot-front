<template>
  <div>
    <main class="section-substrate">
      <div class="container profile">
        <profile-data-form />
        <div class="profile__score shopping-basket">
          <profile-bonuses-enough v-if="bonusDishes.length" :data="bonusDishes" />
        </div>
      </div>
    </main>
    <profile-history :data="orders" />
    <section>
      <div class="container">
        <div class="profile-data">
          <profile-present />
          <client-only>
            <profile-addresses />
          </client-only>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'profile',
  middleware: 'authenticated',
  asyncData ({ store, error }) {
    return store.dispatch('order/getOrders').then((data) => {
      return { orders: data }
    }).catch((errorMessage) => {
      return error({
        statusCode: 404,
        message: errorMessage
      })
    })
  },
  data () {
    return {
      orders: [],
      bonusDishes: []
    }
  }
}
</script>

<style lang="scss">
.profile {
  .form-item {
    margin: 30px 0;
    .form-item__label {
      color: #464646;
      font-weight: 300;
    }
  }

  &__avatar {
    max-width: 290px;
    margin: 0 auto;
  }

  &__score {
    margin: 30px 0 0 0;
  }

  @include media-mobile {
    &__gender {
      display: flex;
      justify-content: space-between;

      .form-item {
        width: 48%;
        margin: 0 0 30px 0;
      }
    }
  }

  @include media-laptop {
    display: flex;
    justify-content: space-between;

    .profile__card-body {
      margin: 15px -12px;
    }

    .profile__card-item {
      width: 33.3%;
      padding: 0 12px;
    }

    &__score,
    &__data {
      position: relative;
    }

    &__data {
      width: 36%;
    }

    &__score {
      width: 62%;
      margin: 0;
    }
  }
}
.profile-data {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
