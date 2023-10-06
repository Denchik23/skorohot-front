<template>
  <div class="container">
    <div class="awards">
      <div class="awards__item substrate">
        <div class="awards__body">
          <div class="awards__rating">
            4,6
          </div>
          <div class="awards__star">
            <div class="stars">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27" height="26">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27" height="26">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27" height="26">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27" height="26">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27" height="26">
            </div>
            <span>266 отзывов</span>
          </div>
        </div>
        <div class="awards__footer">
          <div class="awards__icon">
            <img src="~/assets/img/google-logo.svg" alt="" width="283" height="93">
          </div>
          <a href="https://www.google.com/search?q=skorohot&oq=skorohot&aqs=chrome..69i57j0i2i512l3j69i60l4.485j0j7&sourceid=chrome&ie=UTF-8#lrd=0x40ee0bd2877c5ba7:0xe5d67d2fef761774,1,,,," target="_blank" class="button-link" />
        </div>
      </div>
      <div class="awards__item substrate">
        <div class="awards__body">
          <div class="awards__rating-tripadvisor">
            13<span>из 271<br>ресторанов Анапы</span>
          </div>
          <div class="awards__star">
            <img src="~/assets/img/rating-two.svg" alt="star" width="120" height="21">
            <span>63 отзыв</span>
          </div>
        </div>
        <div class="awards__footer">
          <div class="awards__icon">
            <img src="~/assets/img/tripadvisor.svg" alt="" width="283" height="61">
          </div>
          <a href="https://www.tripadvisor.ru/UserReviewEdit-g608960-d12618266-Pizzeria_Skorohot-Anapa_Krasnodar_Krai_Southern_District.html" target="_blank" class="button-link" />
        </div>
      </div>
      <div class="awards__item substrate">
        <div class="awards__body">
          <div class="awards__rating">
            4,9
          </div>
          <div class="awards__star">
            <div class="stars">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
            </div>
            <span>415 отзывов</span>
          </div>
        </div>
        <div class="awards__footer">
          <div class="awards__icon">
            <img src="~/assets/img/yandex-logo.svg" width="255" height="96" alt="yandex-logo">
          </div>
          <a href="https://yandex.ru/maps/org/skorokhot/219373033524/reviews/?add-review=true&ll=37.332341%2C44.877522&z=14" target="_blank" class="button-link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Awards'
}
</script>

<style lang="scss">
.awards {
  width: 256px;
  margin: 40px auto 0 auto;

  &__item {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__rating {
    font-size: 72px;
    color: #fbbc05;
    padding-right: 8px;
    line-height: 60px;
  }

  &__rating-tripadvisor {
    font-size: 72px;
    color: #00aa6c;
    line-height: 3px;
    width: 70%;
    margin: 28px 0 5px 0;

    > span {
      font-size: 14px;
    }
  }

  &__tripadvisor-star {
    > img {
      margin-right: -12px;
    }
  }

  &__star {
    > span {
      color: #737171;
      font-size: 14px;
      text-align: right;
      display: block;
      margin-top: 5px;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 30px;
  }

  &__icon {
    width: 72%;
  }

  @include media-laptop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 90px;

    &__item {
      width: 300px;
      height: 250px;
      position: relative;
    }

    &__footer {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 22px;
    }
  }

  @include media-desktop {
    &__item {
      width: 428px;
      height: 350px;
    }

    &__rating {
      font-size: 140px;
      line-height: 110px;
    }

    &__star {
      > span {
        font-size: 16px;
      }
    }

    &__rating-tripadvisor {
      font-size: 140px;
      line-height: 0;
      margin: 56px 0 5px 0;

      > span {
        font-size: 24px;
      }
    }
  }
}
</style>
