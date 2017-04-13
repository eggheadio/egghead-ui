import {filter, reduce} from 'lodash'
import {lessonStates} from 'utils/lessonStates'

export default (lessons) => reduce(lessonStates, (memo, state) => ([
  ...memo,
  ...filter(lessons, lesson => lesson.state === state),
]), [])
