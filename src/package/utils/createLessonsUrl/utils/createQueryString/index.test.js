import createQueryString from '.'

test('adds question mark but no ampersands for only one param', () => (
  expect(createQueryString({answer: 42})).toBe('?answer=42')
))

test('adds ampersands between multiple params', () => (
  expect(createQueryString({answer: 42, lucky: 7})).toBe('?answer=42&lucky=7')
))

test('creates comma-separated lists for arrays', () => (
  expect(createQueryString({alphabet: ['a', 'b', 'c']})).toBe('?alphabet=a,b,c')
))
