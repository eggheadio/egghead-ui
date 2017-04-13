import currentMonthStart from '.'

test('first day of the month', () => {
  const realDate = Date
  Date = function () {
    return new realDate('05/24/2013')
  }
  expect(currentMonthStart()).toBe('2013-05-01')
  Date = realDate
})
