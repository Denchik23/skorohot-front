import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'

// TODO по другому подключить стили
import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, {
  dialog: true,
  dynamic: true,
  injectModalsContainer: true
})
