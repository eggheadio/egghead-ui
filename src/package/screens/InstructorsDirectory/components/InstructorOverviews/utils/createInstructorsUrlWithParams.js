import createQueryString from 'package/utils/createQueryString'

const createLessonsUrlWithParams = ({
  pageSize = 10,
  page = 1,
  instructorsUrl, 
}) => {

  const params = {
    'page': page,
    'per_page': pageSize,
  }
  const queryString = createQueryString(params)

  return `${instructorsUrl}${queryString}`
}

export default createLessonsUrlWithParams
