<template>
  <div class="form-item">
    <select :name="name" v-model="selected" class="base-input">
      <option v-for="option in options" :key="option.id" :value="option.id">{{ option.street }}, {{ option.apartment }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'selectAddress',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
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
      this.selected = this.options.find(option => option.id === value).id
    }
  },
  mounted () {
    this.selected = this.options.find(option => option.id === this.value).id
  }
}
</script>

<style scoped>

</style>
