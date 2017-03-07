import React, {PropTypes} from 'react'
import {keys} from 'lodash'
import {
  FaArrowRight,
  FaBars,
  FaCheck,
  FaCheckCircle,
  FaCheckSquareO,
  FaChevronRight,
  FaClockO,
  FaClose,
  FaExclamationCircle,
  FaFileO,
  FaFolderOpenO,
  FaInfoCircle,
  FaMinusCircle,
  FaMoney,
  FaPlay,
  FaPlusCircle,
  FaQuestionCircle,
  FaRefresh,
  FaSquareO,
  FaTimesCircle,
} from 'react-icons/lib/fa'

const typeToSvgIcon = {
  'add': FaPlusCircle,
  'arrow-right': FaArrowRight,
  'box': FaSquareO,
  'box-check': FaCheckSquareO,
  'cancel': FaTimesCircle,
  'check': FaCheck,
  'chevron-right': FaChevronRight,
  'clock': FaClockO,
  'close': FaClose,
  'course': FaFolderOpenO,
  'dollar': FaMoney,
  'info': FaInfoCircle,
  'lesson': FaFileO,
  'menu': FaBars,
  'play': FaPlay,
  'question': FaQuestionCircle,
  'refresh': FaRefresh,
  'remove': FaMinusCircle,
  'success': FaCheckCircle,
  'warning': FaExclamationCircle,
}

export const types = keys(typeToSvgIcon)

const sizeToClass = {
  1: 'f1',
  2: 'f2',
  3: 'f3',
  4: 'f4',
  5: 'f5',
  6: 'f6'
}

export const sizes = keys(sizeToClass)

export const colors = [
  'navy',
  'green',
  'blue',
  'yellow',
  'red',
  'light-gray',
  'orange',
  'turquoise',
]

const Icon = ({
  type,
  size,
  color,
}) => {
  const DynamicIcon = typeToSvgIcon[type]
  return <DynamicIcon className={`${sizeToClass[size]} ${color}`} />
}

Icon.propTypes = {
  type: PropTypes.oneOf(types).isRequired,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
}

Icon.defaultProps = {
  size: '3',
  color: 'blue',
}

Icon.displayName = 'Icon'

export default Icon
