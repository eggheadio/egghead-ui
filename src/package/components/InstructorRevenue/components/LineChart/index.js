import React from 'react'
import {map} from 'lodash'
import hexToRgba from 'hex-rgba'
import {Line} from 'react-chartjs-2'
import numberFormattingByType from 'package/utils/numberFormattingByType'
import colorValues from 'package/utils/colorValues'

const tooltipColor = colorValues['dark-gray']

const sharedOptions = (currency) => ({
  legend: {
    display: false,
  },
  showScale: false,
  scales: {
    yAxes: [{
      display: false,
    }],
    xAxes: [{
      gridLines: {
        display: false
      },
    }],
  },
  tooltips: {
    enabled: true,
    mode: 'single',
    displayColors: false,
    callbacks: {
      label: (tooltipItems) => currency
        ? numberFormattingByType.money(tooltipItems.yLabel)
        : numberFormattingByType.general(tooltipItems.yLabel),
    },
    titleFontSize: 0,
    backgroundColor: 'transparent',
    bodyFontColor: tooltipColor,
    bodyFontStyle: 'bold',
  },
  layout: {
    padding: {
      top: 5,
    },
  },
})

const sharedData = (color) => ({
  borderColor: color,
  backgroundColor: hexToRgba(color, 20),
  pointBorderColor: color,
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: color,
  fill: true,
  lineTension: 0.0,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 3,
  pointHoverBorderWidth: 3,
  pointRadius: 3,
  pointHoverRadius: 3,
  pointHitRadius: 3,
})

export default ({xAxis, yAxis, currency = false}) => (
  <div className='w-100'>
    <Line 
      options={sharedOptions(currency)}
      data={{
        labels: xAxis,
        datasets: map(yAxis, set => ({
          ...sharedData(set.color),
          data: set.points,
        }))
      }}
    />
  </div>
)
