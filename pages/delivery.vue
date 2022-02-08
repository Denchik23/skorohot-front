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
          <p>Мы принимаем карты Visa, MasterCard и Мир, переводом или через терминалы у курьера. Нам важно доставить пиццу горячей и свежей, чтобы наши клиенты получили максимум удовольствия от нашего сервиса: мы доставляем прямо до вашей двери в термо-сумке, бережно перевозим еду, чтобы она не потеряла вид во время поездки.</p>
        </div>
        <div class="delivery__img">
          <img src="~/assets/img/Illustration-delivery.svg" width="689" height="816" alt="Illustration-delivery">
        </div>
      </div>
    </main>
    <section>
      <div class="container">
        <div class="section-title">
          Расчет <span>стоимости доставки</span>
        </div>
        <div class="delivery-calculation substrate">
          <select name="" class="delivery-calculation__place base-input">
            <option value="0" selected="selected">Направление</option>
            <option value="129">Lorem ipsum 129 st 29</option>
            <option value="130">Lorem ipsum 130 st 30</option>
            <option value="150">Lorem ipsum 150 st 50</option>
          </select>
          <div class="delivery-calculation__prices">
            Стоимость: <span>165</span> руб.
          </div>
        </div>
        <div class="delivery-map">
          <img src="~/assets/img/delivery-map.png" width="1372" height="579" alt="delivery-map">
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

  &__place {
    background: #1c1c1c;
    border: none;
    padding: 0;
    margin: 0 0 15px 0;
  }

  &__prices > span {
    margin: 0 0 0 8px;
    font-weight: bold;
  }

  @include media-tablet {
    display: flex;

    &__place {
      width: auto;
      margin: 0 30px 0 0;
    }
  }

  @include media-laptop {
    margin: 30px 0;
  }

  @include media-desktop {
    &__place {
      margin: 0 80px 0 0;
    }

    &__prices,
    &__place {
      font-size: 24px;
      font-weight: 500;
    }
  }
}

.delivery-map {
  margin: 30px 0 0 0;

  @include media-laptop {
    margin: 60px 0 0 0;
  }
}

</style>
