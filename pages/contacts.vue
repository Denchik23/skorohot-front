<template>
  <div>
    <main class="section-substrate">
      <div class="container">
        <div class="title">Мы всегда<br><span class="title_green">на связи </span><span class="title_red">для вас</span></div>
        <div class="intro intro_small">Ежедневно с 10:00 до 00:00</div>
      </div>
    </main>
    <section>
      <div class="container">
        <div class="section-title">Как нас <span>найти?</span></div>
        <div class="intro intro_small">
          Мы находимся по адресу: <strong>г. Анапа, ул. Омелькова, 21</strong>
          <br>На углу улиц Владимирской и Омелькова, между Пенсионным фондом и школой №7.
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="section-title">Контакты <span>для связи</span></div>
        <div class="contact-bond">
          <div class="contact-bond__item">
            <span>WhatsApp</span><a href="tel:+79180576767">+7(918) 057-67-67</a>
          </div>
          <div class="contact-bond__item">
            <span>Звонки:</span><a href="tel:+79180576767">+7(918) 057-67-67</a>
          </div>
          <div class="contact-bond__item">
            <span>Email:</span><a href="mail:info@skorohot.ru">info@skorohot.ru</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container social">
        <div class="social__text">
          <div class="section-title">Мы в <span>соцсетях</span></div>
          <div class="intro intro_small">
            Мы хотим объединять людей, которым нравится наше дело, чтобы делиться с ними особенными акциями и новинками. Мы стараемся держать связь с клиентами везде, где это удобно :)
          </div>
        </div>
        <div class="social__img">
          <img src="~/assets/img/social-tree.svg" width="792" height="849" alt="Illustration-delivery">
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="section-title">Мы <span>на карте</span></div>
        <div class="map-wrapper">
          <yandex-map
            :coords="[44.877520488716804,37.332216560753295]"
            zoom="15"
            :controls="['fullscreenControl', 'rulerControl', 'typeSelector', 'zoomControl']"
            :options="{autoFitToViewport: 'always'}"
            ymap-class="contacts-map"
          >
            <ymap-marker
              marker-id="skorohot"
              marker-type="placemark"
              hint-content="СкороХот"
              :coords="[44.877520488716804,37.332216560753295]"
              balloon-template="Анапа, Омелькова, 21"
            />
          </yandex-map>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  head: {
    title: 'Контакты кафе СкороХот | Доставка еды СкороХОТ'
  }
}
</script>

<style lang="scss">
.map-wrapper {
  margin: 18px 0 0 0;
}
.contacts-map {
  width: 100%;
  height: 480px;
}
.contact-bond {
  margin: 15px 0;

  &__item {
    font-size: 22px;
    > span {
      color: #3cd52e;
      padding: 0 8px 0 0;
    }
  }
}
.social {
  &__text {
    margin: 0 0 30px 0;
  }

  @include media-tablet {
    display: flex;

    &__text {
      margin: 0;
      padding: 0 15px 0 0;
      width: 59%;
    }

    &__img {
      width: 39%;
    }
  }
}
</style>
