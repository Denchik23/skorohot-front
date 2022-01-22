<template>
  <div v-if="options.length" class="form-item">
    <div v-if="label.length" class="form-item__label">
      {{ label }}
    </div>
    <div class="radio-group">
      <div v-for="(option, index) in options" :key="index" class="radio-group__item">
        <input :name="name" type="radio" :id="option.value" :value="option.value" v-model="selected">
        <label class="radio-group__button button" :for="option.value">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseRadioGroup',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      selected: null
    }
  },
  watch: {
    selected (value) {
      this.$emit('input', value)
    },
    value (value) {
      this.selected = this.options.find(option => option.value === value).value
    }
  },
  mounted () {
    this.selected = this.options.find(option => option.value === this.value).value
  }
}
</script>

<style lang="scss">
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
</style>
