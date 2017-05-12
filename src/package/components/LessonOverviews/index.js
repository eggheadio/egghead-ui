import React, {Component, PropTypes} from 'react'
import createLessonsUrlWithParams from 'package/utils/createLessonsUrlWithParams'
import Request from 'package/components/Request'
import PaginatedLessonOverviews from './components/PaginatedLessonOverviews'

class LessonOverviews extends Component {
  
  static propTypes = {
    states: PropTypes.array.isRequired,
    fallback: PropTypes.node.isRequired,
    lessonsUrl: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    includeLessonsInCourses: PropTypes.bool,
  }

  static defaultProps = {
    pageSize: 10,
    includeLessonsInCourses: true,
  }

  state = {
    currentPage: 1,
  }

  handleCurrentPage = (currentPage, request) => {
    this.setState({currentPage}, () => {request()})
  }

  render() {
    const {currentPage} = this.state
    const {
      states,
      fallback,
      lessonsUrl,
      pageSize,
      includeLessonsInCourses,
    } = this.props

    return (
      <Request
        url={createLessonsUrlWithParams({
          states,
          pageSize,
          page: currentPage,
          lessonsUrl: lessonsUrl,
          includeLessonsInCourses,
        })}
        showLoadingBetweenRequests
      >
        {({request, data, response}) => (
          <PaginatedLessonOverviews
            fallback={fallback}
            pageSize={pageSize}
            currentPage={currentPage}
            total={response.headers['x-total-count']}
            lessons={data}
            requestNextPage={(nextPage) => {
              this.handleCurrentPage(nextPage, request)
            }}
            requestCurrentPage={request}
          />
        )}
      </Request>
    )
  }
}

export default LessonOverviews
