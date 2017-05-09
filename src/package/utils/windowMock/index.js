const windowMock = {
  location: {
    href: '',
    reload: () => null,
  },
  localStorage: {
    setItem: () => null,
    getItem: () => null,
    removeItem: () => null,
  },
}

export default windowMock
