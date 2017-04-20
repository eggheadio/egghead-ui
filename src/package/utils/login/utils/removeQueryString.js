export default () => {
  history.pushState(null, '', location.href.split('?')[0])
}
