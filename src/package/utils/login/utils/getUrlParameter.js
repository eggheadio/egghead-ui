const location = location || false // eslint-disable-line

export default (key) => {
  if(!location) {
    return false
  }
  const cleanKey = key.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp(`[\\?&]${cleanKey}=([^&#]*)`)
  const results = regex.exec(location.search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
