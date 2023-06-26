import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  lang: 'ru_RU',
  apiKey: '2126101b-82ed-4c76-9378-2c07649d4e4e'
}

Vue.use(YmapPlugin, settings)
