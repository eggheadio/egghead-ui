import {filter} from 'lodash'

export default (revenue, month) => filter(revenue, (memo) => memo.month !==  month)