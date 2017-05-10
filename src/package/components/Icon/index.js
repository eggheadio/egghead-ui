import React, {PropTypes} from 'react'
import {keys} from 'lodash'
import {
  EggheadArrowDown,
  EggheadArrowLeft,
  EggheadArrowRight,
  EggheadArrowUp,
  EggheadCheck,
  EggheadCross,
  EggheadEdit,
  EggheadEnterSearch,
  EggheadFullCoursesHeadline,
  EggheadHistory,
  EggheadInfo,
  EggheadPlus,
  EggheadProfile,
  EggheadProgressRing,
  EggheadQuickLessonsHeadline,
  EggheadQuestion,
  EggheadRss,
  EggheadTechnology,
  EggheadUpload,
} from 'react-icons/lib/egghead'
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaBars,
  FaCheckCircle,
  FaCheckSquareO,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaClockO,
  FaClone,
  FaClose,
  FaDownload,
  FaExclamationCircle,
  FaEye,
  FaFileO,
  FaFileTextO,
  FaFolderOpenO,
  FaHome,
  FaListUl,
  FaLongArrowRight,
  FaLongArrowLeft,
  FaLongArrowUp,
  FaLongArrowDown,
  FaMinusCircle,
  FaMoney,
  FaPlay,
  FaRefresh,
  FaSearch,
  FaSignOut,
  FaSlack,
  FaSquareO,
  FaUser,
  FaInfoCircle,
} from 'react-icons/lib/fa'
import colors from 'package/utils/colors'

const typeToSvgIcon = {
  'download': FaDownload,
  'clone': FaClone,
  'add': EggheadPlus,
  'angle-down': FaAngleDown,
  'angle-up': FaAngleUp,
  'angle-right': FaAngleRight,
  'angle-left': FaAngleLeft,
  'angle-double-down': FaAngleDoubleDown,
  'angle-double-up': FaAngleDoubleUp,
  'angle-double-right': FaAngleDoubleRight,
  'angle-double-left': FaAngleDoubleLeft,
  'arrow-down': EggheadArrowDown,
  'arrow-left': EggheadArrowLeft,
  'arrow-right': EggheadArrowRight,
  'arrow-up': EggheadArrowUp,
  'box': FaSquareO,
  'box-check': FaCheckSquareO,
  'cancel': EggheadCross,
  'check': EggheadCheck,
  'chevron-down': FaChevronDown,
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
  'chevron-up': FaChevronUp,
  'clock': FaClockO,
  'close': FaClose,
  'course': FaFolderOpenO,
  'course-headline': EggheadFullCoursesHeadline,
  'dollar': FaMoney,
  'edit': EggheadEdit,
  'eye': FaEye,
  'enter': EggheadEnterSearch,
  'file-text-o': FaFileTextO,
  'home': FaHome,
  'history': EggheadHistory,
  'info': EggheadInfo,
  'info-circle': FaInfoCircle,
  'lesson': FaFileO,
  'lesson-headline': EggheadQuickLessonsHeadline,
  'long-arrow-right': FaLongArrowRight,
  'long-arrow-left': FaLongArrowLeft,
  'long-arrow-up': FaLongArrowUp,
  'long-arrow-down': FaLongArrowDown,
  'list-ul': FaListUl,
  'menu': FaBars,
  'play': FaPlay,
  'profile': EggheadProfile,
  'progress-ring': EggheadProgressRing,
  'question': EggheadQuestion,
  'rss': EggheadRss,
  'refresh': FaRefresh,
  'remove': FaMinusCircle,
  'search': FaSearch,
  'sign-out': FaSignOut,
  'slack': FaSlack,
  'success': FaCheckCircle,
  'technology': EggheadTechnology,
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
