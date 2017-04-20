import React, {PropTypes} from 'react'
import {keys} from 'lodash'
import {
  EggheadArrowRight,
  EggheadCheck,
  EggheadCross,
  EggheadEdit,
  EggheadInfo,
  EggheadPlus,
  EggheadQuestion,
  EggheadUpload,
} from 'react-icons/lib/egghead'
import {
  FaBars,
  FaCheckCircle,
  FaCheckSquareO,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaClockO,
  FaClose,
  FaExclamationCircle,
  FaFileO,
  FaFolderOpenO,
  FaHome,
  FaListUl,
  FaMinusCircle,
  FaMoney,
  FaPlay,
  FaRefresh,
  FaSearch,
  FaSignOut,
  FaSlack,
  FaSquareO,
  FaUser,
} from 'react-icons/lib/fa'
import colors from 'package/utils/colors'

const typeToSvgIcon = {
  'add': EggheadPlus,
  'arrow-right': EggheadArrowRight,
  'box': FaSquareO,
  'box-check': FaCheckSquareO,
  'cancel': EggheadCross,
  'check': EggheadCheck,
  'chevron-down': FaChevronDown,
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
  'clock': FaClockO,
  'close': FaClose,
  'course': FaFolderOpenO,
  'dollar': FaMoney,
  'edit': EggheadEdit,
  'home': FaHome,
  'info': EggheadInfo,
  'lesson': FaFileO,
  'list-ul': FaListUl,
  'menu': FaBars,
  'play': FaPlay,
  'question': EggheadQuestion,
  'refresh': FaRefresh,
  'remove': FaMinusCircle,
  'search': FaSearch,
  'sign-out': FaSignOut,
  'slack': FaSlack,
  'success': FaCheckCircle,
  'upload': EggheadUpload,
  'user': FaUser,
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
  color: 'dark-gray',
}

export default Icon
