import React from 'react'
import {map} from 'lodash'
import hexToRgba from 'hex-rgba'
import {Line} from 'react-chartjs-2'
import numberFormattingByType from 'utils/numberFormattingByType'

const tooltipColor = '#63768d' // # dark-gray

const sharedOptions = (currency) => ({
  responsive: true,
  maintainAspectRatio: false,
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
  <div className='w-100 h-100'>
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
