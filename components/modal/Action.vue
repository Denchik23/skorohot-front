<template>
  <modal
    name="modal-action"
    width="480"
    :classes="['modal']"
    :height="'auto'"
    :clickToClose="false"
    :scrollable="true"
    @before-open="beforeOpen"
  >
    <div class="modal__inner">
      <button class="modal__close close-pic" @click="closeModalActions" />
      <div class="modal__body">
        <div v-if="data.title" class="modal__title section-title" :class="{ 'modal__title_error':data.messageClass }">
          {{ data.title }}
        </div>
        <div v-if="data.message" class="modal__subtitle intro" v-html="data.message" />
        <ui-base-button
          class="modal__button"
          :title="data.btnText"
          @click="closeModalActions"
        />
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'Action',
  data () {
    return {
      data: null,
      defaultData: {
        title: '',
        btnText: '',
        message: '',
        messageClass: false,
        link: '',
        routerLink: '',
        type: '',
        blank: false
      }
    }
  },
  created () {
    this.resetModal()
  },
  methods: {
    beforeOpen (event) {
      this.resetModal()
      if (event.params) {
        for (const e in event.params) {
          this.data[e] = event.params[e]
        }
      }
    },
    resetModal () {
      this.data = Object.assign({}, this.defaultData)
    },
    closeModalActions () {
      this.$modal.hide('modal-action')
    }
  }
}
</script>

<style scoped>

</style>
