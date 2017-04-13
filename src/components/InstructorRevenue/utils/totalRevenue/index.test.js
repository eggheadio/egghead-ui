import totalRevenue from '.'

const revenueFixture = [
  {
    month: '2016-02-01',
    minutes_watched: 5,
    revenue: 2,
  },
  {
    month: '2016-03-01',
    minutes_watched: 15,
    revenue: 3,
  },
  {
    month: '2016-04-01',
    minutes_watched: 30,
    revenue: 5,
  },
]

test('total revenue', () => (
  expect(totalRevenue(revenueFixture)).toEqual({
    minutes_watched: 50,
    revenue: 10,
    monthCount: 3,
  })
))
