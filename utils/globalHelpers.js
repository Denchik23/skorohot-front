export function prepareErrorMessage (error) {
  let message = 'Ошибка запроса данных. Обратитесь к администратору!'
  if (typeof error.response !== 'undefined' && typeof error.response.data.message !== 'undefined') {
    message = error.response.data.message
  }
  return message
}

export function getCookie (document, cookieName) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + cookieName.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}
