<template>
  <div>
    <main class="section-substrate">
      <div class="container profile">
        <div class="profile__data substrate">
          <div class="profile__avatar">
            <img src="~/assets/img/ava-girls.png" alt="user avatar" width="300" height="300">
          </div>
          <div class="form-item">
            <div class="input-icon">
              <input type="text" value="Мария" class="base-input" placeholder="+7 989 776-18-71" disabled="disabled">
              <i class="icon-edit"></i>
            </div>
          </div>
          <div class="form-item">
            <label class="form-item__label profile__label">Мой номер</label>
            <div class="input-icon">
              <input type="text" value="+7 989 776-18-71" class="base-input" placeholder="+7 989 776-18-71" disabled="disabled">
              <i class="icon-edit"></i>
            </div>
          </div>
          <div class="form-item">
            <label class="form-item__label profile__label">E-mail</label>
            <div class="input-icon">
              <input type="text" value="afwsocial.work@gmail.com" class="base-input" placeholder="+7 989 776-18-71" disabled="disabled">
              <i class="icon-edit"></i>
            </div>
          </div>
          <div class="form-item">
            <label class="form-item__label profile__label">Пароль</label>
            <div class="input-icon">
              <input type="password" value="123456789" class="base-input" disabled="disabled">
              <i class="icon-edit"></i>
            </div>
          </div>
          <div class="profile__gender">
            <div class="form-item">
              <label class="form-item__label profile__label">Пол</label>
              <button class="profile__gender-button">Укажите пол</button>
            </div>
            <div class="form-item">
              <label class="form-item__label profile__label">Дата рождения</label>
              <button class="profile__gender-button">Укажите дату</button>
            </div>
          </div>
          <button class="button button_green">Сохранить изменения</button>
        </div>
        <div class="profile__score shopping-basket">
          <div class="profile__score-substrate">
            10 009<br>баллов
          </div>
          <div class="profile__intention intention">
            <i class="icon-intention"></i>
            <span>Баллы можно потратить на оплату 30% стоимости позиций из ассортимента. 1 балл = 1 рубль.  Баллы начисляются с каждого завершенного заказа, за исключением заказа, оплаченного бонусными баллами. Срок существования баллов - 12 месяцев. После чего они сгорают.</span>
          </div>
          <profile-bonuses-enough v-if="bonusDishes.length" :data="bonusDishes"/>
        </div>
      </div>
    </main>
    <profile-history :data="orders"/>
    <section>
      <div class="container">
        <div class="shopping-data">
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
  data () {
    return {
      orders: [],
      bonusDishes: []
    }
  },
  async asyncData ({ app, route, params, error, store }) {
    const orders = await store.dispatch('order/getOrders')
    const bonusDishes = await store.dispatch('profile/getBonusDishes')
    return { orders, bonusDishes }
  }
}
</script>

<style lang="scss">
.profile {
  .form-item {
    margin: 30px 0;
  }

  &__avatar {
    max-width: 290px;
    margin: 0 auto;

    > img {
      border-radius: 50%;
      border: 2px solid #3cd52e;
    }
  }

  .profile__label {
    color: #464646;
    font-weight: 300;
  }

  &__gender-button {
    font-family: "Roboto", sans-serif;
    border: none;
    background: unset;
    color: #3cd52e;
    font-size: 18px;
    font-weight: 400;
  }

  &__score {
    margin: 30px 0 0 0;
  }

  &__score-substrate {
    border-radius: 15px;
    font-weight: bold;
    font-size: 26px;
    background: linear-gradient(90deg, #276c21 0%, #4e6031 100%);
    padding: 12px;
    text-align: center;
    line-height: 1.3;
  }

  &__intention {
    margin: 15px 0;

    > span {
      color: #464646;
      font-size: 16px;
    }
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

    &__score-substrate {
      position: absolute;
      top: 0;
      right: 0;
      padding: 12px 40px;
      font-size: 46px;
    }

    &__intention {
      margin: 0 250px 60px 0;
      text-align: justify;
    }
  }
}
</style>
