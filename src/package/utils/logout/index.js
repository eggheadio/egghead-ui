import windowMock from 'package/utils/windowMock'

const universalWindow = typeof(window) === 'undefined' 
  ? windowMock 
  : window

const logout = () => {
  universalWindow.localStorage.removeItem('token')
  universalWindow.location.reload()
}

export default logout
