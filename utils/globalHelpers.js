export function prepareErrorMessage (error) {
  let message = 'Ошибка запроса данных. Обратитесь к администратору!'
  if (typeof error.response !== 'undefined' && typeof error.response.data.message !== 'undefined') {
    message = error.response.data.message
  }
  return message
}
