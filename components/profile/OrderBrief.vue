<template>
  <div class="shopping-basket__item">
    <div class="history substrate">
      <div v-if="order.score !== 0" class="history__score">
        {{ order.score }}<br>баллов
      </div>
      <div class="history__title section-title">
        Статус: <span>{{ order.status.name }}</span>
      </div>
      <div class="history__date-time">
        <span>{{ dateParser.date }}</span>
        <span>{{ dateParser.time }}</span>
      </div>
      <ul class="history__list">
        <li v-for="item in order.dishes" :key="item.id">
          <div class="history__name">
            {{ item.name }}
          </div>
          <div class="history__data">
            <span>{{ item.pivot.quantity }} кол-во.</span>
            <span>{{ item.price }} руб.</span>
          </div>
        </li>
      </ul>
      <div class="history__button">
        <ui-base-button
          shadow
          title="Повторить"
          :error="errorButton"
          :loader="loaderButton"
          @click="repeat"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FormMixin from '@/mixins/FormMixin'

export default {
  name: 'OrderBrief',
  mixins: [FormMixin],
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateParser () {
      const date = new Date(Date.parse(this.order.created_at))
      return {
        date: date.toLocaleDateString('ru-RU'),
        time: date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }
    }
  },
  methods: {
    ...mapActions({
      addDish: 'cart/addDish'
    }),
    repeat () {
      if (this.order.dishes.length) {
        this.$store.dispatch('cart/clear')
        this.order.dishes.forEach((item) => {
          this.addDish({ product: item, quantity: item.pivot.quantity })
        })
        this.$router.push('/cart')
      }
    }
  }
}
</script>

<style lang="scss">
.history {
  position: relative;
  background: #181818;
  box-shadow: none;

  &__score {
    position: absolute;
    top: 0;
    right: 0;
    background: #1c1c1c;
    text-align: center;
    padding: 12px;
    border-radius: 10px;
    line-height: 1.4;
    font-size: 14px;
    font-weight: bold;
  }

  &__title {
    font-size: 20px;
    margin: 0 0 8px 0;
    padding: 0 50px 0 0;
  }

  &__date-time {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 0;

    > span {
      font-weight: 300;
    }
  }

  &__list {
    overflow: overlay;
    height: 200px;
    padding: 0 30px 0 0;
    list-style: none;
    margin: 30px 0;

    > li {
      padding: 8px 0;
    }
  }

  &__name {
    color: #3cd52e;
  }

  &__data {
    display: flex;
    justify-content: space-between;
  }

  &__button {
    text-align: center;
  }
}
</style>
