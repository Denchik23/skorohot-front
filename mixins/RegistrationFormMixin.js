import { required, minLength, requiredIf } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import { isPhone } from '~/utils/validationUtils'
import ModalMixin from '~/mixins/ModalMixin'
import FormMixin from '~/mixins/FormMixin'

export default {
  components: {
    TheMask
  },
  mixins: [
    FormMixin,
    ModalMixin
  ],
  data () {
    return {
      checkCodeLayout: false,
      validSmsCode: false,
      errorText: '',
      phoneCurrent: '',
      isErrorText: false,
      timerDefault: 60,
      timer: '',
      smsTimerShow: false,
      secondsTimer: false,
      defaultData: {
        name: '',
        phone: '',
        code: ''
      }
    }
  },
  validations () {
    return {
      data: {
        name: {
        },
        phone: {
          required,
          isPhone
        },
        code: {
          required: requiredIf(() => this.validSmsCode),
          minLength: minLength(6)
        }
      }
    }
  },
  methods: {
    stepBack () {
      this.checkCodeLayout = false
      this.isErrorText = false
      this.errorText = ''
    },
    startTimer () {
      this.timer = this.timerDefault
      this.smsTimerShow = true
      this.secondsTimer = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
          if (this.timer < 10) {
            this.timer = '0' + this.timer
          }
        } else {
          clearInterval(this.secondsTimer)
          this.smsTimerShow = false
        }
      }, 1000)
    },
    sendSmsCode () {
      this.validSmsCode = false
      if (!this.beforeSubmit()) {
        return
      }
      if (this.smsTimerShow && this.data.phone === this.phoneCurrent) {
        this.loaderButton = false
        this.checkCodeLayout = true
        return false
      }
      const data = {
        phone: '7' + this.data.phone
      }
      this.$store.dispatch('profile/sendSMSCode', data)
        .finally(() => {
          this.loaderButton = false
        })
        .then((response) => {
          if (typeof response.success !== 'undefined' && response.success) {
            this.checkCodeLayout = true
            clearInterval(this.secondsTimer)
            this.phoneCurrent = this.data.phone
            this.startTimer()
          }
        }).catch((error) => {
          this.showModalError(this.getResponseErrorMessage(error.response))
        })
    },
    confirm () {
      this.validSmsCode = true
      if (!this.beforeSubmit()) {
        return
      }
      const data = {
        phone: '7' + this.data.phone,
        code: this.data.code,
        password: this.data.code
      }
      this.$store.dispatch('profile/confirmSMSCode', data)
        .finally(() => {
          this.loaderButton = false
        })
        .then((response) => {
          if (typeof response.success !== 'undefined' && response.success) {
            this.$auth.loginWith('laravelSanctum', {
              data
            }).then(() => {
              this.$router.push('/profile')
            }).catch((error) => {
              this.showModalError(this.getResponseErrorMessage(error.response))
            })
          } else {
            this.isErrorText = true
            this.errorText = response.message
          }
        }).catch((error) => {
          this.showModalError(this.getResponseErrorMessage(error.response))
        })
    }
  }
}
