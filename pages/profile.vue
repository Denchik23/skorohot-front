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
          <div class="section-title section-title_substrate">Ваших бонусов <span>достаточно&nbsp;для:</span></div>
          <div class="profile__card-body shopping-basket__body">
            <div class="profile__card-item shopping-basket__item">
              <div class="card-mini card">
                <img src="~/assets/img/burrito.png" width="288" height="165" alt="burrito-card" class="card-mini__img">
                <div class="card-mini__head card__head">
                  <div class="card-mini__name card__name">борито с угрем</div>
                </div>
                <div class="ingredients">
                  <div class="ingredients__col">
                    <div class="ingredients__item">Угорь</div>
                  </div>
                  <div class="ingredients__col">
                    <div class="ingredients__item">Яркий</div>
                  </div>
                  <div class="ingredients__col">
                    <div class="ingredients__item">Сливочный</div>
                  </div>
                </div>
                <div class="card-mini__intro card__intro">
                  Желаете легкий, но питательный перекус? Тогда...
                  <a href="#">Далее</a>
                </div>
                <div class="card-mini__data card__data">
                  <div class="card__count">237 гр.<br>8 шт.</div>
                  <div class="card__prices">299 руб.</div>
                </div>
                <div class="card__buttons">
                  <div class="card-mini__count button-count">
                    <button class="button-count__add">+</button>
                    <span class="button-count__count">1</span>
                    <button class="button-count__del">-</button>
                  </div>
                  <button class="card-mini__buy card__button-bay button"><i class="icon-basket"></i></button>
                </div>
              </div>
            </div>
            <div class="profile__card-item shopping-basket__item">
              <div class="card-mini card">
                <img src="~/assets/img/burrito.png" width="288" height="165" alt="burrito-card" class="card-mini__img">
                <div class="card-mini__head card__head">
                  <div class="card-mini__name card__name">борито с угрем</div>
                </div>
                <div class="ingredients">
                  <div class="ingredients__col">
                    <div class="ingredients__item">Угорь</div>
                  </div>
                  <div class="ingredients__col">
                    <div class="ingredients__item">Яркий</div>
                  </div>
                  <div class="ingredients__col">
                    <div class="ingredients__item">Сливочный</div>
                  </div>
                </div>
                <div class="card-mini__intro card__intro">
                  Желаете легкий, но питательный перекус? Тогда...
                  <a href="#">Далее</a>
                </div>
                <div class="card-mini__data card__data">
                  <div class="card__count">237 гр.<br>8 шт.</div>
                  <div class="card__prices">299 руб.</div>
                </div>
                <div class="card__buttons">
                  <div class="card-mini__count button-count">
                    <button class="button-count__add">+</button>
                    <span class="button-count__count">1</span>
                    <button class="button-count__del">-</button>
                  </div>
                  <button class="card-mini__buy card__button-bay button"><i class="icon-basket"></i></button>
                </div>
              </div>
            </div>
            <div class="profile__card-item shopping-basket__item">
              <div class="card-mini card">
                <img src="~/assets/img/burrito.png" width="288" height="165" alt="burrito-card" class="card-mini__img">
                <div class="card-mini__head card__head">
                  <div class="card-mini__name card__name">борито с угрем</div>
                </div>
                <div class="ingredients">
                  <div class="ingredients__col">
                    <div class="ingredients__item">Угорь</div>
                  </div>
                  <div class="ingredients__col">
                    <div class="ingredients__item">Яркий</div>
                  </div>
                  <div class="ingredients__col">
                    <div class="ingredients__item">Сливочный</div>
                  </div>
                </div>
                <div class="card-mini__intro card__intro">
                  Желаете легкий, но питательный перекус? Тогда...
                  <a href="#">Далее</a>
                </div>
                <div class="card-mini__data card__data">
                  <div class="card__count">237 гр.<br>8 шт.</div>
                  <div class="card__prices">299 руб.</div>
                </div>
                <div class="card__buttons">
                  <div class="card-mini__count button-count">
                    <button class="button-count__add">+</button>
                    <span class="button-count__count">1</span>
                    <button class="button-count__del">-</button>
                  </div>
                  <button class="card-mini__buy card__button-bay button"><i class="icon-basket"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <profile-history :data="orders"/>
    <section>
      <div class="container">
        <div class="shopping-data">
          <profile-present />
          <div class="profile-address substrate">
            <div class="section-title section-title_substrate">Адрес <span>доставки</span></div>
            <div class="profile-address__item">
              <div class="profile-address__body">
                <span>Дом</span>
                ул. Ленина 195, кв 163, этаж 9
              </div>
              <div class="profile-address__edit">
                <button><i class="icon-edit"></i></button>
              </div>
            </div>
            <div class="profile-address__item">
              <div class="profile-address__body">
                <span>Дом который на котором в котором за котор...</span>
                ул. Ленина 195, кв 163, этаж 9
              </div>
              <div class="profile-address__edit">
                <button><i class="icon-edit"></i></button>
              </div>
            </div>
            <div class="profile-address__item">
              <div class="profile-address__body">
                <span>Дом</span>
                ул. Ленина 195, кв 163, этаж 9 ул. Ленина 9...
              </div>
              <div class="profile-address__edit">
                <button><i class="icon-edit"></i></button>
              </div>
            </div>
            <button class="button button_green">Добавить адрес</button>
          </div>
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
      orders: []
    }
  },
  async asyncData ({ app, route, params, error, store }) {
    const orders = await store.dispatch('order/getOrders')
    return { orders }
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

.profile-address {
  width: 100%;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
  }

  &__body {
    > span {
      display: block;
      font-weight: bold;
    }
  }

  &__edit {
    > button {
      border: none;
      background: unset;
      padding: 0 0 8px 15px;
    }
  }

  @include media-laptop {
    width: 36%;

    &__item {
      margin: 35px 0;
    }
  }
}
</style>
