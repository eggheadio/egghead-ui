const location = location || false // eslint-disable-line

export default () => {
  if(!location) {
    return false
  }
  history.pushState(null, '', location.href.split('?')[0])
}
