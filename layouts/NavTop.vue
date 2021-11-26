<template>
  <div class="nav-top container">
    <div class="nav-top__menu">
      <ul class="nav nav-top__links">
        <li><a href="#" class="nav__link nav__link_active">Главная</a></li>
        <li><a href="#" class="nav__link">Меню</a></li>
        <li><a href="#" class="nav__link">Акции</a></li>
        <li><a href="#" class="nav__link">О нас</a></li>
        <li><a href="#" class="nav__link">Доставка</a></li>
        <li><a href="#" class="nav__link">Контакты</a></li>
      </ul>
    </div>
    <div class="basket-body">
      <button class="nav-top__basket basket-body__basket basket">10 500</button>
      <button class="nav-top__button basket-body__button button_green button">Войти</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NavTop'
}
</script>
