import {includes, indexOf, slice, some} from 'lodash'
import {lessonStates} from 'package/utils/lessonStates'

export default (instructorLessonStates, minimumLessonState) => {
  const qualifyingLessonStates = slice(
    lessonStates,
    indexOf(lessonStates, minimumLessonState)
  )
  return some(
    qualifyingLessonStates,
    qualifyingLessonState => includes(instructorLessonStates, qualifyingLessonState)
  )
}
