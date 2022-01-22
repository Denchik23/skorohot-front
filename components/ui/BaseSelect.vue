<template>
  <div class="form-item">
    <select :name="name" v-model="selected" class="base-input">
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
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
      selected: 0
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

<style scoped>

</style>
