<template>
  <modal
    :name="name"
    :min-width="360"
    :max-width="480"
    adaptive
    :classes="['modal']"
    :height="'auto'"
    :click-to-close="false"
    :scrollable="true"
  >
    <div class="modal__inner">
      <button class="modal__close close-pic" @click="closeModalActions" />
      <div class="modal__body">
        <div v-if="title" class="modal__title section-title">
          {{ title }}
        </div>
        <slot />
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeModalActions () {
      this.$modal.hide(this.name)
    }
  }
}
</script>
