<template>
  <div class="pagination">
    <button
      class="pagination__link"
      :disabled="data.prevPageUrl === null"
      @click="$emit('clickHandler', data.currentPage-1)"
    >
      <i class="pagination__icon pagination__icon_previous" />
    </button>
    <button
      class="pagination__link"
      :disabled="data.nextPageUrl === null"
      @click="$emit('clickHandler', data.currentPage+1)"
    >
      <i class="pagination__icon pagination__icon_next" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['clickHandler']
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 3rem 0 0 0;

  &__link {
    margin: 0 .5rem;
    border: none;
    background: unset;
    cursor: pointer;
    &:disabled {
      opacity: 0.6;
      pointer-events: none;
    }
  }

  &__icon {
    width: 1rem;
    height: 1rem;
    border-style: solid;
    border-color: #fff;
    border-width: .2rem .2rem 0 0;
    display: block;
    margin: 0 auto;
  }

  &__icon_previous {
    transform: rotate(-135deg);
  }
  &__icon_next {
    transform: rotate(45deg);
  }
  @include media-tablet {
    margin: 0;
  }
}
</style>
