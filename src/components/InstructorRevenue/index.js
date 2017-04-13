import React from 'react'
import {find, size, map} from 'lodash'
import {Card, Maybe} from 'egghead-ui'
import {Text} from 'react-localize'
import Request from 'components/Request'
import OpenToggle from 'components/OpenToggle'
import DeviceWidth from 'components/DeviceWidth'
import currentMonthStartDate from './utils/currentMonthStartDate'
import totalRevenue from './utils/totalRevenue'
import removeRevenueMonth from './utils/removeRevenueMonth'
import prettyMonthName from './utils/prettyMonthName'
import RevenuePeriod from './components/RevenuePeriod'
import LineChart from './components/LineChart'

const revenueColor = '#59cd90' // # blue
const minutesColor = '#B0B6BE' // # dark-gray-secondary
const activeLabelClassName = 'dark-gray b'

export default ({revenueUrl}) => (
  <Maybe condition={Boolean(revenueUrl)}>
    <Request url={revenueUrl}>
      {({data}) => {
        const currentMonthRevenue = find(data, ['month', currentMonthStartDate()])
        const currentTotalRevenue = totalRevenue(removeRevenueMonth(data, currentMonthStartDate()))
        const hasCurrentRevenue = size(data) > 0
          && ((currentMonthRevenue && currentMonthRevenue.revenue > 0) || (currentTotalRevenue && currentTotalRevenue.revenue > 0))

        if(!hasCurrentRevenue) {
          return null
        }

        const currentMonthNames = map(data, month => prettyMonthName(month.month))
        const currentRevenuePoints = map(data, month => month.revenue)
        const currentMinutesPoints = map(data, month => month.minutes_watched)

        return (
          <OpenToggle>
            {({isOpen, handleOpenToggleClick}) => (
              <DeviceWidth>
                {(screenSize) => (
                  <Card>
                    <div className='tc tl-l flex-l justify-between-l'>

                      <div 
                        className='pa5 nowrap-l'
                        style={{
                          boxShadow: screenSize === 'large'
                            ? '10px 0px 25px -10px rgba(35,45,59, 0.1)'
                            : '0px 25px 25px -25px rgba(35,45,59, 0.1)',
                        }}
                      >

                        <div className='mb4'>
                          <RevenuePeriod
                            title={<Text message='instructorRevenue.currentMonth.title' />}
                            revenue={currentMonthRevenue.revenue}
                            subscriberMinutes={currentMonthRevenue.minutes_watched}
                          />
                        </div>

                        <RevenuePeriod
                          title={<Text 
                            message='instructorRevenue.previousMonths.title' 
                            values={[currentTotalRevenue.monthCount]} 
                          />}
                          revenue={currentTotalRevenue.revenue}
                          subscriberMinutes={currentTotalRevenue.minutes_watched}
                        />

                      </div>

                      <div className='w-100 pa3'>
                        <div 
                          onClick={handleOpenToggleClick}
                          className='dark-gray-secondary ttl f6 pa2 tr-l'
                        >
                          <span className={`${isOpen ? '' : activeLabelClassName} mr2`}>
                            <Text message='instructorRevenue.revenue' />
                          </span>
                          <span className='mr2'>
                            /
                          </span>
                          <span className={isOpen ? activeLabelClassName : ''}>
                            <Text message='instructorRevenue.minutes' />
                          </span>
                        </div>
                        {isOpen
                          ? <LineChart
                              key='minutes'
                              xAxis={currentMonthNames}
                              yAxis={[
                                {
                                  color: minutesColor,
                                  points: currentMinutesPoints,
                                },
                              ]}
                            />
                          : <LineChart
                              key='revenue'
                              xAxis={currentMonthNames}
                              yAxis={[
                                {
                                  color: revenueColor,
                                  points: currentRevenuePoints,
                                },
                              ]}
                              currency
                            />
                        }
                      </div>

                    </div>
                  </Card>
                )}
              </DeviceWidth>
            )}
          </OpenToggle>
        )
      }}
    </Request>
  </Maybe>
)
