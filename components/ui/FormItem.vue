<template>
  <div class="form-item" :class="{'form-item_error': error}">
    <label v-if="label.length" class="form-item__label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <slot />
    <div v-if="$slots.error && error" class="form-item__error">
      <slot name="error" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
input[disabled],
select[disabled] {
  background-color: #21262a;
}

.form-item {
  margin: 30px 0;

  &__label {
    color: #fff;
    font-weight: bold;
    margin: 0 0 10px 0;
    display: block;
  }

  &__error {
    color: #c00;
  }

  &_error input,
  &_error select,
  &_error textarea {
    border: 1px solid #c00;
  }

  @include media-desktop {
    margin: 50px 0;

    &__label {
      margin: 0 0 12px 0;
    }
  }
}

.base-input {
  width: 100%;
  font-size: 18px;
  margin: 0;
  background: #181818;
  border: 1px solid #181818;
  border-radius: 8px;
  padding: 15px;
  line-height: 1;
  color: #fff;
}

.input-icon {
  display: flex;
  align-items: center;

  .base-input {
    width: 89%;
    margin: 0 15px 0 0;
  }
}

.required {
  margin: 0 0 0 6px;
  color: #3cd52e;
}

.base-range {
  appearance: none;
  width: 100%;
  height: 25px;
  background: #181818;
  outline: none;
  border-radius: 8px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 36px;
    height: 36px;
    background: #ff5000;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 36px;
    height: 36px;
    background: #ff5000;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
