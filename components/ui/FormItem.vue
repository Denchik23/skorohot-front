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
    placeholder: {
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
  &_error select {
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

/* Customize the label (the checkbox-custom) */
.checkbox-custom {
  display: block;
  position: relative;
  padding: 0 0 0 30px;
  cursor: pointer;
  font-weight: normal;
  user-select: none;

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &.disabled-checkbox {
    pointer-events: none;
    opacity: 0.6;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark::after {
    display: block;
  }

  &__error {
    display: block;
    margin-top: 10px;
    color: #c00;
    text-decoration: none;
    font-size: 14px;
  }
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 3px;
  left: 0;
  width: 21px;
  height: 21px;
  border: 1px solid #181818;
  background: #181818;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: -2px;
    width: 10px;
    height: 19px;
    border: solid #3cd52e;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
}

.radio-group {
  background: #181818;
  display: flex;
  padding: 5px;
  border-radius: 8px;

  &__item {
    margin: 0 8px;
    width: 49%;
    background: unset;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    input:checked ~ label.radio-group__button {
      background: linear-gradient(180deg, #ff5000 15.42%, #ff8a00 100%);
      cursor: unset;
    }
  }

  .radio-group__button {
    background: unset;
    height: 100%;
    width: 100%;
    padding: 15px 5px;
  }
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
