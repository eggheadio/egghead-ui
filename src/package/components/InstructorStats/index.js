import React, {PropTypes} from 'react'
import pluralize from 'pluralize'
import {map, uniqBy} from 'lodash'
import {hasUnlockedPublished, hasUnlockedCoursePublished} from 'utils/instructorMilestones'
import createLessonsUrl from 'utils/createLessonsUrl'
import Maybe from 'components/Maybe'
import Card from 'components/Card'
import Request from 'components/Request'
import InstructorStat from './components/InstructorStat'

const InstructorStats = ({instructor}) => {

  if(!hasUnlockedPublished(instructor.published_lessons)) {
    return null
  }

  return (
    <Card>
      <div className='pa5'>
        <Request
          url={createLessonsUrl({
            lessons_url: instructor.lessons_url
          })}
        >
          {({data}) => (
            <InstructorStat
              count={instructor.published_lessons}
              label={pluralize('Lesson', instructor.published_lessons)}
              graphics={uniqBy(map(data, lesson => ({
                name: lesson.technology.name,
                graphicUrl: lesson.technology.logo_http_url,
                httpUrl: lesson.technology.http_url,
              })), technology => technology.name)}
            />
          )}
        </Request>
        <Maybe condition={hasUnlockedCoursePublished(instructor.published_courses)}>
          <div className='mt4'>
            <Request url={`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/series?instructor_id=${instructor.id}`}>
              {({data}) => (
                <InstructorStat
                  count={instructor.published_courses}
                  label={pluralize('Course', instructor.published_courses)}
                  graphics={map(data, course => ({
                    name: course.title,
                    graphicUrl: course.square_cover_url,
                    httpUrl: course.http_url,
                  }))}
                />
              )}
            </Request>
          </div>
        </Maybe>
      </div>
    </Card>
  )
}

InstructorStats.propTypes = {
  instructor: PropTypes.object.isRequired,
}

export default InstructorStats
