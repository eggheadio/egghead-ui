const logout = () => {
  localStorage.removeItem('token')
  window.location.reload()
}

export default logout
