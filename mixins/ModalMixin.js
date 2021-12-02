export default {
  methods: {
    showModalInfo (
      message = '',
      title = 'Успешно',
      btnText = 'Закрыть',
      link = ''
    ) {
      this.$modal.show('modal-action', {
        title,
        btnText,
        link,
        message,
        messageClass: false
      })
    },
    showModalError (
      message = '',
      title = 'Ошибка запроса',
      btnText = 'Закрыть'
    ) {
      this.$modal.show('modal-action', {
        title,
        btnText,
        message,
        messageClass: true
      })
    }
  }
}
