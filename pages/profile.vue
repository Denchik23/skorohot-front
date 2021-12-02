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
    <section class="section-substrate">
      <div class="container">

      </div>
    </section>
    <section class="section-substrate">
      <div class="container">
        <div class="shopping-basket">
          <div class="section-title section-title_substrate">История <span>заказов!</span></div>
          <div class="shopping-basket__body">
            <div class="shopping-basket__item">
              <div class="history substrate">
                <div class="history__score">+ 30<br>баллов</div>
                <div class="history__title section-title">Статус: <span>Готовится</span></div>
                <div class="history__date-time">
                  <span>01.01.2021</span>
                  <span>23:23</span>
                </div>
                <ul class="history__list">
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Сливочная курочка"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                </ul>
                <div class="history__button">
                  <button class="button button_shadow">Повторить</button>
                </div>
              </div>
            </div>
            <div class="shopping-basket__item">
              <div class="history substrate">
                <div class="history__score">+ 30<br>баллов</div>
                <div class="history__title section-title">Статус: <span>Готовится</span></div>
                <div class="history__date-time">
                  <span>01.01.2021</span>
                  <span>23:23</span>
                </div>
                <ul class="history__list">
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Сливочная курочка"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                </ul>
                <div class="history__button">
                  <button class="button button_shadow">Повторить</button>
                </div>
              </div>
            </div>
            <div class="shopping-basket__item">
              <div class="history substrate">
                <div class="history__score">+ 30<br>баллов</div>
                <div class="history__title section-title">Статус: <span>Готовится</span></div>
                <div class="history__date-time">
                  <span>01.01.2021</span>
                  <span>23:23</span>
                </div>
                <ul class="history__list">
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Сливочная курочка"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                </ul>
                <div class="history__button">
                  <button class="button button_shadow">Повторить</button>
                </div>
              </div>
            </div>
            <div class="shopping-basket__item">
              <div class="history substrate">
                <div class="history__score">+ 30<br>баллов</div>
                <div class="history__title section-title">Статус: <span>Готовится</span></div>
                <div class="history__date-time">
                  <span>01.01.2021</span>
                  <span>23:23</span>
                </div>
                <ul class="history__list">
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Сливочная курочка"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                  <li>
                    <div class="history__name">Пицца "Охотник"</div>
                    <div class="history__data">
                      <span>1 шт.</span>
                      <span>300 руб.</span>
                    </div>
                  </li>
                </ul>
                <div class="history__button">
                  <button class="button button_shadow">Повторить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="shopping-data">
          <div class="present substrate">
            <div class="present__body">
              <div class="section-title section-title_substrate">Вы еще не забрали<br><span>свой подарок?</span></div>
              <div class="present__intro">Подарок в приложении! Установи его себе бесплатно и получи подарок к следующему заказу.<br>
                <span>Доступно как для Ios, так и для android.</span>
              </div>
              <div class="present__link-apps">
                <a href="#"><img src="~/assets/img/link-buy-apple.png" alt="link" width="279" height="86"></a>
                <a href="#"><img src="~/assets/img/link-buy-google.png" alt="link" width="279" height="86"></a>
              </div>
            </div>
          </div>
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
  name: 'profile'
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

.history {
  position: relative;
  background: #181818;
  box-shadow: none;

  &__score {
    position: absolute;
    top: 0;
    right: 0;
    background: #1c1c1c;
    text-align: center;
    padding: 12px;
    border-radius: 10px;
    line-height: 1.4;
    font-size: 14px;
    font-weight: bold;
  }

  &__title {
    font-size: 20px;
    margin: 0 0 8px 0;
    padding: 0 50px 0 0;
  }

  &__date-time {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 0;

    > span {
      font-weight: 300;
    }
  }

  &__list {
    overflow: overlay;
    height: 200px;
    padding: 0 30px 0 0;
    list-style: none;
    margin: 30px 0;

    > li {
      padding: 8px 0;
    }
  }

  &__name {
    color: #3cd52e;
  }

  &__data {
    display: flex;
    justify-content: space-between;
  }

  &__button {
    text-align: center;
  }
}

.present {
  width: 100%;
  margin: 0 0 15px 0;

  &__body {
    background: url("~assets/img/Vector.svg") #1c1c1c no-repeat right;
    background-size: contain;
  }

  &__intro {
    margin: 15px 0;
    font-weight: 300;

    > span {
      display: block;
      margin: 15px 0 0 0;
      font-weight: bold;
    }
  }

  &__link-apps {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 70px 0 0 0;

    > a {
      width: 48%;
      display: block;

      &:last-child {
        margin: 0;
      }
    }
  }

  @include media-laptop {
    width: 62%;
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
