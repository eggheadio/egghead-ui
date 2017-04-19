import formatNumber from 'format-number'

const numberFormattingByType = {
  general: value => formatNumber({round: 2})(value),
  money: value => formatNumber({round: 2, prefix: '$', padRight: 2})(value),
}

export default numberFormattingByType
