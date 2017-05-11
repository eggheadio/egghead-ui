import React, {PropTypes} from 'react'
import ReactPaginate from 'react-paginate'
import {map} from 'lodash'
import Maybe from 'package/components/Maybe'
import Card from 'package/components/Card'
import sortLessonsByState from './utils/sortLessonsByState'
import LessonOverview from './components/LessonOverview'

const PaginatedLessonOverviews = ({ 
  fallback,
  pageSize,
  currentPage,
  total,
  lessons,
  requestNextPage,
  requestCurrentPage,
}) => {

  const pageCount = Math.ceil(total / pageSize)
  const hasMoreThanOnePage = (pageCount > 1) && (lessons.length > 0)

  const linkClassNames = {
    mobileHide: 'dn db-ns',
    link: 'db dim pointer bg-orange white mb2 mr2 pa2 ph3-ns br2',
  }

  return total > 0
    ? <div>

        {map(sortLessonsByState(lessons), (lesson, index) => (
          <div 
            key={lesson.id}
            className={index < lessons.length - 1 ? 'mb3' : ''}
          >
            <Card>
              <LessonOverview 
                lesson={lesson}
                requestCurrentPage={requestCurrentPage}
              />
            </Card>
          </div>
        ))}

        <Maybe condition={hasMoreThanOnePage}>
          <div className='pa3'>
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              initialPage={currentPage - 1}
              previousLabel={'Previous'}
              nextLabel={'Next'}
              onPageChange={(page) => {
                const {selected} = page
                if (currentPage !== selected + 1) {
                  requestNextPage(selected + 1)
                }
              }}
              containerClassName='mb0 pa0 list mt4 flex flex-wrap items-center'
              previousClassName={linkClassNames.mobileHide}
              nextClassName={linkClassNames.mobileHide}
              disabledClassName='o-20'
              previousLinkClassName={linkClassNames.link}
              nextLinkClassName={linkClassNames.link}
              pageLinkClassName={linkClassNames.link}
              activeClassName='o-50'
              breakClassName='mr2'
            />
          </div>
        </Maybe>

      </div>
    : fallback
}

PaginatedLessonOverviews.propTypes = {
  fallback: PropTypes.node.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.string,
  lessons: PropTypes.array.isRequired,
  requestNextPage: PropTypes.func.isRequired,
}

export default PaginatedLessonOverviews
