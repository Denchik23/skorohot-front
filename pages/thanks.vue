<template>
  <div>
    <main class="section-substrate">
      <div class="container">
        <div class="title">Спасибо<br><span class="title_green">за ваш </span><span class="title_red">заказ!</span></div>
        <div class="intro intro_small">наш оператор свяжется с вами в течение нескольких минут, чтобы уточнить детали</div>
      </div>
    </main>
    <section class="thanks-block">
      <div class="container">
        <div class="substrate plea">
          <div class="section-title section-title_substrate">А вы знали, <span>что...</span></div>
          <div class="intro">Если оставить фотоотзыв, то можно получить подарок при следующем заказе?</div>
          <ul class="plea__list">
            <li>Сделай фото с привезенной едой от СКОРОХОТ</li>
            <li>
              Выкладывай свой отзыв в удобном сервисе:
              <img src="~/assets/img/Tripadvisor-small.svg" width="102" height="21" alt="Tripadvisor-small">
              <img src="~/assets/img/google-small.svg" width="60" height="19" alt="google-small">
              <img src="~/assets/img/yandex-small.svg" width="47" height="26" alt="yandex-small">
            </li>
            <li>Укажи в комментариях к следующему заказу ссылку на свой отзыв и получи подарок :)</li>
          </ul>
          <div class="plea__example-reviews section-title">пример <span>хорошего отзыва:</span></div>
          <div class="plea__reviews reviews">
            <div class="reviews__head">
              <div class="reviews__avatar">
                <img src="~/assets/img/reviews-avatar-empty.svg" alt="avatar" width="54" height="53">
              </div>
              <div class="reviews__data">
                <div class="reviews__title">Мария Быстрова</div>
                <div class="reviews__star stars">
                  <img src="~/assets/img/star-sharp.svg" alt="star" width="15">
                  <img src="~/assets/img/star-sharp.svg" alt="star" width="15">
                  <img src="~/assets/img/star-sharp.svg" alt="star" width="15">
                </div>
              </div>
            </div>
            <div class="reviews__body">
              Я в восторге, ребят. Лучшее из роллов, что я ела.
              В своём городе, а он за 2500 км от Анапы, я нигде так и не нашла идеальных роллов.
              Сами роллы большие , сытные, оформление на высоте.
              Туристы, местные, только сюда за роллами, не пожалеете.
              За заказ через приложение - подарок.
              <img src="~/assets/img/image-reviews-body.jpg" width="191" height="151">
            </div>
          </div>
          <div class="plea__button">
            <button class="button button_shadow">Оставить отзыв</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'thanks',
  middleware: 'authenticated'
}
</script>

<style lang="scss">
.plea {
  &__list {
    margin: 15px 0;
    // padding: 0;
    padding: 0 0 0 30px;

    > li {
      font-weight: 300;
      margin: 8px 0;

      > img {
        margin: 0 6px;
      }
    }
  }

  &__example-reviews {
    font-size: 22px;
    margin: 0 0 15px 0;
  }

  &__reviews {
    margin: 0 0 30px 0;

    .reviews__body {
      padding-left: 0;
    }
  }

  @include media-laptop {
    width: 60%;

    &__list {
      margin: 30px 0;
    }

    &__example-reviews {
      font-size: 28px;
      margin: 0 0 30px 0;
    }

    &__reviews {
      margin: 0 0 60px 0;
    }

    &__button {
      text-align: center;
    }
  }

  @include media-desktop {
    width: 48%;
    padding: 60px;
  }
}

.thanks-block {

  @include media-laptop {
    background: url("~assets/img/delivery.svg") no-repeat center;
  }
}

</style>
