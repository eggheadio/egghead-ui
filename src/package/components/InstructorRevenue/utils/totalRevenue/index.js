import {reduce} from 'lodash'

const initialMemo = {
  minutes_watched: 0,
  revenue: 0,
  monthCount: 0,
}

export default (revenue) => reduce(revenue, (memo, monthRevenue) => ({
  minutes_watched: memo.minutes_watched + monthRevenue.minutes_watched,
  revenue: memo.revenue + monthRevenue.revenue,
  monthCount: memo.monthCount + 1,
}), initialMemo)
