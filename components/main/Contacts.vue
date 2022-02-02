<template>
  <section>
    <div class="container">
      <div class="section-title">
        Наш <span>адрес</span>
      </div>
      <div class="section-intro">
        Заходите в гости! Мы будем вам рады
      </div>
      <div class="contacts">
        <div class="contacts__data substrate">
          <div class="contacts__block">
            <div class="contacts__title">
              Как нас найти?
            </div>
            <div class="contacts__body">
              Мы находимся по адресу:<br><strong>г. Анапа, ул. Омелькова, 21</strong>
              <div class="contacts__address">
                На углу улиц Владимирской и Омелькова, между Пенсионным фондом и школой №7.
              </div>
            </div>
          </div>
          <div class="contacts__block">
            <div class="contacts__title contacts__title_second">
              Контакты для связи
            </div>
            <div class="contacts__body">
              <span>WhatsApp</span><strong>+7 (918) 057-67-67</strong><br>
              <span>Звонки:</span><strong>+7 (988) 339-89-61</strong><br>
              <span>Email:</span><a href="mail:info@skorohot.ru"><strong>info@skorohot.ru</strong></a>
            </div>
          </div>
        </div>
        <div class="contacts__map">
          <img src="~/assets/img/map.png" alt="map">
          <a href="#" class="contacts__router button">Построить маршрут</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss">
.contacts {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__data {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 28px;
  }

  &__block {
    width: 100%;
  }

  &__title {
    font-weight: 700;
    font-size: 22px;
    // line-height: 42px;
    color: #3cd52e;
    margin-bottom: 15px;
  }

  &__title_second {
    margin-top: 30px;
  }

  &__body {
    font-weight: 300;

    span {
      color: #3cd52e;
      padding-right: 10px;
    }

    a {
      color: #fff;
    }
  }

  &__address {
    margin-top: 15px;
  }

  &__map {
    position: relative;
    width: 100%;
  }

  .contacts__router {
    position: absolute;
    bottom: 6px;
    display: block;
  }

  @include media-tablet {
    &__block {
      width: 48%;
    }

    &__title_second {
      margin-top: 0;
    }

    .contacts__router {
      bottom: unset;
      right: 0;
      top: 15%;
      border-radius: 8px 0 0 8px;
      height: auto;
      padding: 12px 30px;
    }
  }

  @include media-laptop {
    &__block {
      width: 100%;
    }

    &__title_second {
      margin-top: 30px;
    }

    &__data {
      width: 39%;
    }

    &__map {
      width: 59%;
    }
  }

  @include media-desktop {
    &__title {
      font-size: 36px;
    }
  }
}
</style>
