import windowMock from 'package/utils/windowMock'

const universalWindow = typeof(window) === 'undefined' 
  ? windowMock 
  : window

export default (key) => {
  const cleanKey = key.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp(`[\\?&]${cleanKey}=([^&#]*)`)
  const results = regex.exec(universalWindow.location.search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
