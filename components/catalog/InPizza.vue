<template>
  <div class="in-pizza">
    <div class="in-pizza__item">
      <img src="~/assets/img/premium-icon-soy-flour.svg" alt="premium-icon-soy-flour" width="123" height="123">
      Мука экстра-класса
    </div>
    <div class="in-pizza__item">
      <img src="~/assets/img/cheese.svg" alt="cheese" width="123" height="123">
      Натуральные итальянские сыры
    </div>
    <div class="in-pizza__item">
      <img src="~/assets/img/fish.svg" alt="fish" width="128" height="123">
      Свежие морепродукты и мясо
    </div>
    <div class="in-pizza__item">
      <img src="~/assets/img/fruits-and-vegetables.svg" alt="fruits-and-vegetables" width="123" height="123">
      Качественные овощи
    </div>
  </div>
</template>

<script>
export default {
  name: 'InPizza'
}
</script>

<style lang="scss">
.in-pizza {
  display: none;

  @include media-tablet {
    display: flex;
    justify-content: space-between;
    // background: linear-gradient(180deg, rgba(237, 75, 2, 0.2) 0%, rgba(0, 0, 0, 0) 98.46%), linear-gradient(180deg, #363636 0%, #1f1f1f 100%);
    background: linear-gradient(180deg, #59392c, #1f1f1f);
    border-radius: 10px;
    padding: 12px;

    &__item {
      text-align: center;
      font-weight: 500;
      color: #3cd52e;
      width: 23%;

      > img {
        display: block;
        margin: 0 auto 15px auto;
      }
    }
  }

  @include media-laptop {
    padding: 30px 0;

    &__item {
      font-size: 18px;
    }
  }
}
</style>
