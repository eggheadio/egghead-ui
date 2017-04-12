import createQueryString from './utils/createQueryString'

export default ({
  states,
  pageSize = 20,
  page = 1,
  lessons_url, 
  includeLessonsInCourses = true,
}) => {

  const allLessonsUrl = `${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons`
  const lessonsUrl = lessons_url || allLessonsUrl

  const params = {
    'page': page,
    'per_page': pageSize,
    ...(states
      ? {state: states}
      : {}
    ),
    'sort': ['state', 'row_order'],
    'without_course': !includeLessonsInCourses,
  }
  const queryString = createQueryString(params)

  return `${lessonsUrl}${queryString}`
}
