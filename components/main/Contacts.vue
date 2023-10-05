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
        <div ref="contactMap" class="contacts__map">
          <client-only>
            <yandex-map
              v-if="isShowMap"
              :coords="[44.877520488716804,37.332216560753295]"
              zoom="15"
              :controls="['fullscreenControl', 'rulerControl', 'typeSelector', 'zoomControl']"
              :options="{autoFitToViewport: 'always'}"
              ymap-class="contacts-map-main"
              @map-was-initialized="mapInitialized"
            >
              <ymap-marker
                marker-id="skorohot"
                marker-type="placemark"
                hint-content="СкороХот"
                :coords="[44.877520488716804,37.332216560753295]"
                balloon-template="Анапа, Омелькова, 21"
              />
            </yandex-map>
            <button class="contacts__router button" @click="buildRoute">
              Построить маршрут
            </button>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
  data () {
    return {
      isShowMap: false,
      coords: [44.894818, 37.316367],
      yandexMapSkorohot: null
    }
  },
  mounted () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isShowMap = true
        }
      })
    })
    observer.observe(this.$refs.contactMap)
  },
  methods: {
    buildRoute () {
      // eslint-disable-next-line no-undef
      ymaps.route([this.coords, [44.877520488716804, 37.332216560753295]], { mapStateAutoApply: true }).then(
        function (route) {
          this.yandexMapSkorohot.geoObjects.add(route)
          this.yandexMapSkorohot.rout = route
        },
        // eslint-disable-next-line node/handle-callback-err
        function () {
          alert('Разрешите, пожалуйста, определение вашего местоположения')
        }, this
      )
    },
    mapInitialized (payload) {
      if (window.ymaps) {
        // eslint-disable-next-line no-undef
        ymaps.geolocation.get().then((res) => {
          this.coords = res.geoObjects.get(0).geometry.getCoordinates()
        })
      }
      this.yandexMapSkorohot = payload
    }
  }
}
</script>

<style lang="scss">
.contacts-map-main {
  height: 600px;
  width: 100%;
}
.contacts {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__data {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    z-index: 5;
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
