import React, {PropTypes} from 'react'
import {map} from 'lodash'
import {xsmallContainerWidth} from 'package/utils/hardCodedSizes'

const LayoutColumns = ({items, relativeSizes}) => (
  <div className='flex flex-wrap'>
    {map(items, (item, index) => (
      <div
        key={index}
        className={`
          mb4
          ${index < items.length - 1 ? 'mr4' : ''}
        `}
        style={{
          flexGrow: relativeSizes
            ? relativeSizes[index]
            : 1,
          flexShrink: 0,
          flexBasis: xsmallContainerWidth - 100,
        }}
      >
        {item}
      </div>
    ))}
  </div>
)

LayoutColumns.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  relativeSizes: PropTypes.arrayOf(PropTypes.number),
}

export default LayoutColumns
