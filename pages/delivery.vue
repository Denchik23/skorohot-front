<template>
  <div>
    <main class="section-substrate">
      <div class="container delivery">
        <div class="delivery__data">
          <div class="title">
            Доставка<br><span class="title_green">прямо </span><span class="title_red">до двери</span>
          </div>
          <div class="intro intro_small">
            платите так, как вам удобно: наличными или картой курьеру
          </div>
          <p>Мы принимаем карты Visa, MasterCard и Мир, переводом или через терминалы у курьера. Нам важно доставить
            пиццу горячей и свежей, чтобы наши клиенты получили максимум удовольствия от нашего сервиса: мы доставляем
            прямо до вашей двери в термо-сумке, бережно перевозим еду, чтобы она не потеряла вид во время поездки.</p>
        </div>
        <div class="delivery__img">
          <img src="~/assets/img/Illustration-delivery.svg" width="689" height="816" alt="Illustration-delivery">
        </div>
      </div>
    </main>
    <section>
      <div class="container">
        <div class="section-title">
          Cтоимости <span>доставки</span>
        </div>
        <div class="delivery-calculation substrate">
          <table class="delivery-calculation__table">
            <thead>
              <tr>
                <th>Направление</th>
                <th>Стоимость доставки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>г.Анапа</td>
                <td>99</td>
              </tr>
              <tr>
                <td>п.Алексеевка</td>
                <td>120</td>
              </tr>
              <tr>
                <td>ст-ца Анапская</td>
                <td>180</td>
              </tr>
              <tr>
                <td>п. Су-Псех</td>
                <td>140</td>
              </tr>
              <tr>
                <td>Пионерский проспект до Золотой Берег до №3</td>
                <td>160</td>
              </tr>
              <tr>
                <td>Пионерский проспект от Золотой Берег до №28 Технополис Эра</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Пионерский проспект от №28&nbsp; до №199 (гостевой проезд).</td>
                <td>350</td>
              </tr>
              <tr>
                <td>Пионерский проспект от №199 (гостевой проезд) до Жемчужины</td>
                <td>450</td>
              </tr>
              <tr>
                <td>п.Чембурка</td>
                <td>310</td>
              </tr>
              <tr>
                <td>п.Усатова Балка</td>
                <td>240</td>
              </tr>
              <tr>
                <td>п.Варваровка</td>
                <td>260</td>
              </tr>
              <tr>
                <td>х. Просторный</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Красный Хутор</td>
                <td>350</td>
              </tr>
              <tr>
                <td>х.Воскресенский</td>
                <td>350</td>
              </tr>
              <tr>
                <td>х.Пятихатки</td>
                <td>400</td>
              </tr>
              <tr>
                <td>х.Рассвет</td>
                <td>350</td>
              </tr>
              <tr>
                <td>п.Сукко</td>
                <td>500</td>
              </tr>
              <tr>
                <td>п.Гай-Кодзор</td>
                <td>500</td>
              </tr>
              <tr>
                <td>х.Заря</td>
                <td>500</td>
              </tr>
              <tr>
                <td>п.Цибанобалка</td>
                <td>350</td>
              </tr>
              <tr>
                <td>п.Витязево</td>
                <td>500</td>
              </tr>
              <tr>
                <td>п.Большой Утриш</td>
                <td>500</td>
              </tr>
              <tr>
                <td>х.Песчанный</td>
                <td>550</td>
              </tr>
              <tr>
                <td>х.Виноградный</td>
                <td>600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'delivery'
}
</script>

<style lang="scss">
.delivery {
  &__img {
    margin: 60px 0 0 0;
  }

  @include media-tablet {
    display: flex;
    justify-content: space-between;

    &__data,
    &__img {
      width: 49%;
      margin: 0;
    }
  }

  @include media-laptop {
    &__data {
      width: 69%;
    }

    &__img {
      width: 30%;
    }
  }

  @include media-desktop {
    &__data {
      //width: 59%;
      width: 49%;
    }

    &__img {
      // width: 40%;
      width: 30%;
    }
  }
}

.delivery-calculation {
  margin: 15px 0;
  &__table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #eae9e9;
      td {
        padding: 5px;
        vertical-align: middle;
      }
    }
    tr td:nth-child(even) {
      text-align: center;
    }
  }
  @include media-laptop {
    &__table {
      thead th {
        font-size: 24px;
      }
    }
  }
}

</style>
