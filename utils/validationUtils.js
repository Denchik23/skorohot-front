import { helpers } from 'vuelidate/lib/validators'

export function isPhone (value) {
  if (!helpers.req(value)) {
    return true
  }
  value = value.replace(/\D/g, '')
  if (value.length !== 11) {
    return false
  }
  // Проверка на принадлежность пулу номеров РФ
  const regex = /^(?:8(?:(?:21|22|23|24|51|52|53|54|55)|(?:15\d\d))?|\+?7)?(?:(?:3[04589]|4[012789]|8[^89\D]|9\d)\d)?\d{7}$/
  return regex.test(value)
}
