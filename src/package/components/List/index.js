import React, {PropTypes} from 'react'
import {map} from 'lodash'

const List = ({items}) => (
  <div>
    {map(items, (item, index) => (
      <div
        key={index}
        className={`pa4 ${index < items.length - 1 ? 'bb b--gray-secondary' : ''}`}
      >
        {item}
      </div>
    ))}
  </div>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default List
