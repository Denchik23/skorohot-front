<template>
  <div class="present substrate">
    <div class="present__body">
      <div class="section-title section-title_substrate">Вы еще не забрали<br><span>свой подарок?</span></div>
      <div class="present__intro">
        Подарок в приложении! Установи его себе бесплатно и получи подарок к следующему заказу.<br>
        <span>Доступно как для Ios, так и для android.</span>
      </div>
      <div class="present__link-apps">
<!--        <a href="https://apps.apple.com/ru/app/%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%85%D0%BE%D1%82/id1481242900" target="_blank" rel="noreferrer">
          <img src="~/assets/img/link-buy-apple.png" alt="link" width="279" height="86">
        </a>
        <a href="https://play.google.com/store/apps/details?id=online.skorohot.app" target="_blank" rel="noreferrer">
          <img src="~/assets/img/link-buy-google.png" alt="link" width="279" height="86">
        </a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Present'
}
</script>

<style lang="scss">
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
</style>
