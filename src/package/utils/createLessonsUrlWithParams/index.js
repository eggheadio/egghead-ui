import createQueryString from './utils/createQueryString'

const createLessonsUrlWithParams = ({
  states,
  pageSize = 10,
  page = 1,
  lessonsUrl, 
  includeLessonsInCourses = true,
}) => {

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

export default createLessonsUrlWithParams
