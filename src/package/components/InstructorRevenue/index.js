import React, {PropTypes} from 'react'
import {find, size, map} from 'lodash'
import Card from 'package/components/Card'
import Request from 'package/components/Request'
import Open from 'package/components/Open'
import ContainerWidth from 'package/components/ContainerWidth'
import currentMonthStartDate from './utils/currentMonthStartDate'
import totalRevenue from './utils/totalRevenue'
import removeRevenueMonth from './utils/removeRevenueMonth'
import prettyMonthName from './utils/prettyMonthName'
import RevenuePeriod from './components/RevenuePeriod'
import LineChart from './components/LineChart'

const revenueColor = '#59cd90' // # blue
const minutesColor = '#B0B6BE' // # dark-gray-secondary
const activeLabelClassName = 'dark-gray b'

const InstructorRevenue = ({revenueUrl}) => revenueUrl
  ? <Request url={revenueUrl}>
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
          <Open>
            {({isOpen, handleOpenToggleClick}) => (
              <ContainerWidth>
                {(containerWidth) => (
                  <Card>
                    <div className={containerWidth === 'small'
                      ? 'tc'
                      : 'tl flex justify-between'
                    }>

                      <div 
                        className={`pa5 ${containerWidth === 'small' ? '' : 'nowrap'}`}
                        style={{
                          boxShadow: containerWidth === 'small'
                            ? '0px 25px 25px -25px rgba(35,45,59, 0.1)'
                            : '10px 0px 25px -10px rgba(35,45,59, 0.1)',
                        }}
                      >

                        <div className='mb4'>
                          <RevenuePeriod
                            title='This Month'
                            revenue={currentMonthRevenue.revenue}
                            subscriberMinutes={currentMonthRevenue.minutes_watched}
                          />
                        </div>

                        <RevenuePeriod
                          title={`Last ${currentTotalRevenue.monthCount} months`}
                          revenue={currentTotalRevenue.revenue}
                          subscriberMinutes={currentTotalRevenue.minutes_watched}
                        />

                      </div>

                      <div className='w-100 pa3 flex flex-column justify-between'>

                        <div 
                          onClick={handleOpenToggleClick}
                          className={`dark-gray-secondary ttl f6 pa2 ${containerWidth === 'small' ? '' : 'tr'}`}
                        >
                          <span className={`${isOpen ? '' : activeLabelClassName} mr2`}>
                            Revenue
                          </span>
                          <span className='mr2'>
                            /
                          </span>
                          <span className={isOpen ? activeLabelClassName : ''}>
                            Minutes
                          </span>
                        </div>

                        {isOpen
                          ? <LineChart
                              key={`minutes-${containerWidth}`}
                              xAxis={currentMonthNames}
                              yAxis={[
                                {
                                  color: minutesColor,
                                  points: currentMinutesPoints,
                                },
                              ]}
                            />
                          : <LineChart
                              key={`revenue-${containerWidth}`}
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
              </ContainerWidth>
            )}
          </Open>
        )
      }}
    </Request>
  : null

InstructorRevenue.propTypes = {
  revenueUrl: PropTypes.string,
}

export default InstructorRevenue
