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
</style>
