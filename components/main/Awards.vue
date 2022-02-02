<template>
  <div class="container">
    <div class="awards">
      <div class="awards__item substrate">
        <div class="awards__body">
          <div class="awards__rating">
            4,8
          </div>
          <div class="awards__star">
            <div class="stars">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="27">
            </div>
            <span>296 отзывов</span>
          </div>
        </div>
        <div class="awards__footer">
          <div class="awards__icon">
            <img src="~/assets/img/google-logo.svg" alt="" width="283" height="93">
          </div>
          <a href="https://www.google.ru/" target="_blank" class="button-link" />
        </div>
      </div>
      <div class="awards__item substrate">
        <div class="awards__body">
          <div class="awards__rating-tripadvisor">
            18<span>из 349<br>ресторанов Анапы</span>
          </div>
          <div class="awards__star">
            <img src="~/assets/img/rating-two.svg" alt="star">
            <span>61 отзыв</span>
          </div>
        </div>
        <div class="awards__footer">
          <div class="awards__icon">
            <img src="~/assets/img/tripadvisor.svg" alt="" width="283" height="61">
          </div>
          <a href="#" target="_blank" class="button-link" />
        </div>
      </div>
      <div class="awards__item substrate">
        <div class="awards__body">
          <div class="awards__rating">
            4,8
          </div>
          <div class="awards__star">
            <div class="stars">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
              <img src="~/assets/img/star-sharp.svg" alt="star" width="20">
            </div>
            <span>179 отзывов</span>
          </div>
        </div>
        <div class="awards__footer">
          <div class="awards__icon">
            <img src="~/assets/img/yandex-logo.svg" width="255" height="96" alt="yandex-logo">
          </div>
          <a href="#" class="button-link" />
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
