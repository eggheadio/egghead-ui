import React, {PropTypes} from 'react'
import {map, keys} from 'lodash'

const paddingClassNameBySize = {
  small: 'pa3',
  medium: 'pa4',
  large: 'pa5',
}

export const sizes = keys(paddingClassNameBySize)

const List = ({
  items, 
  size = 'medium',
  overDark = false,
}) => (
  <div>
    {map(items, (item, index) => (
      <div
        key={index}
        className={`
          ${paddingClassNameBySize[size]} 
          ${index < items.length - 1 
            ? overDark
              ? 'bb b--dark-blue'
              : 'bb b--gray-secondary' 
            : ''
          }
        `}
      >
        {item}
      </div>
    ))}
  </div>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  size: PropTypes.oneOf(sizes),
  overDark: PropTypes.bool,
}

export default List
