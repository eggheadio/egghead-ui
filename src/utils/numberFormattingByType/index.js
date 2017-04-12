import formatNumber from 'format-number'

export default {
  general: value => formatNumber({round: 2})(value),
  money: value => formatNumber({round: 2, prefix: '$', padRight: 2})(value),
}
