<template>
  <div class="form-item">
    <label class="checkbox-custom">
      {{ label }}
      <input type="checkbox" v-model="checked" @change="$emit('input', $event.target.checked)">
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checked: this.value
    }
  }
}
</script>

<style lang="scss">
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
</style>
