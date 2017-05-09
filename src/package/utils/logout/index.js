const localStorage = localStorage || false // eslint-disable-line 

const logout = () => {
  if(!localStorage) {
    return
  }
  localStorage.removeItem('token')
  window.location.reload()
}

export default logout
