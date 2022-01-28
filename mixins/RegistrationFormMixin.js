import { required, minLength, sameAs, requiredIf } from 'vuelidate/lib/validators'
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
        password: '',
        password_confirmation: '',
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
        password: {
          required,
          minLength: minLength(6)
        },
        password_confirmation: {
          required,
          sameAsPassword: sameAs('password')
        },
        code: {
          required: requiredIf(() => this.validSmsCode)
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
      const v = this
      v.timer = this.timerDefault
      v.smsTimerShow = true
      this.secondsTimer = setInterval(function () {
        if (v.timer > 0) {
          v.timer--
          if (v.timer < 10) {
            v.timer = '0' + v.timer
          }
          // eslint-disable-next-line no-self-assign
          v.timer = v.timer
        } else {
          clearInterval(v.secondsTimer)
          v.smsTimerShow = false
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
      this.$store.dispatch('profile/sendSMSCode', this.data)
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
      this.$store.dispatch('profile/confirmSMSCode', this.data)
        .finally(() => {
          this.loaderButton = false
        })
        .then((response) => {
          if (typeof response.success !== 'undefined' && response.success) {
            this.$auth.loginWith('laravelSanctum', {
              data: this.data
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
