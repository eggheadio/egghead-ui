import removeRevenueMonth from '.'

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

test('revenue without a month', () => (
  expect(removeRevenueMonth(revenueFixture, '2016-04-01')).toEqual([
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
  ])
))
