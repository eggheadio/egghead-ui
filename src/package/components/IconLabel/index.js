import React, {PropTypes} from 'react'
import colors from 'utils/colors'
import Icon, {types as iconTypes} from 'components/Icon'

const IconLabel = ({
  iconType, 
  labelText, 
  color,
}) => (
  <div className='flex items-center'>
    <div className='w2'>
      <Icon
        type={iconType}
        color={color}
      />
    </div>
    <span className={`f5 ml1 ${color}`}>
      {labelText}
    </span>
  </div>
)

IconLabel.propTypes = {
  iconType: PropTypes.oneOf(iconTypes).isRequired,
  labelText: PropTypes.string.isRequired,
  color: PropTypes.oneOf(colors),
}

IconLabel.defaultProps = {
  color: 'dark-gray',
}

export default IconLabel
