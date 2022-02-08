<template>
  <div>
    <ul class="set-ingredients">
      <li
        v-for="ingredient in data"
        :key="ingredient.id"
        class="set-ingredients__item"
      >
        <a href="#">{{ ingredient.name }}<span class="set-ingredients__chevron" /></a>
      </li>
    </ul>
    <div class="intro-ingredient substrate">
      <div class="intro-ingredient__title">
        Амай
      </div>
      <p>Морской окунь в кляре, изумительный снежный краб, сливочный сыр, свежий огурчик, икра Масаго.</p>
      <a href="#" class="intro-ingredient__link">Подробнее</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ingredients',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.set-ingredients {
  padding: 0;
  margin: 30px 0 15px 0;
  list-style: none;

  &__item {
    display: inline-block;

    > a {
      color: #fff;
      padding: 0 15px 0 0;
    }
  }

  &__chevron {
    border-top: 3px solid #3cd52e;
    border-right: 3px solid #3cd52e;
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
    transform: rotate(45deg);
    transition: transform .2s linear;
    margin: 0 0 0 8px;
  }
}

.intro-ingredient {
  &__title {
    color: #3cd52e;
    font-weight: 500;
    font-size: 20px;
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    margin: 8px 0;
  }

  &__link {
    display: block;
    text-align: right;
    color: #3cd52e;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
