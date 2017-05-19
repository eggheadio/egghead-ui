import React, {PropTypes} from 'react'
import pluralize from 'pluralize'
import {map, uniqBy} from 'lodash'
import {hasUnlockedPublished, hasUnlockedCoursePublished} from 'package/utils/instructorMilestones'
import createLessonsUrlWithParams from 'package/utils/createLessonsUrlWithParams'
import Card from 'package/components/Card'
import Request from 'package/components/Request'
import InstructorStat from './components/InstructorStat'

const InstructorStats = ({instructor}) => {

  if(!hasUnlockedPublished(instructor.published_lessons)) {
    return null
  }

  return (
    <Card>
      <div className='pa5'>

        <Request
          url={createLessonsUrlWithParams({
            lessonsUrl: instructor.lessons_url
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

        {hasUnlockedCoursePublished(instructor.published_courses)
          ? <div className='mt4'>
              <Request auth={true} url={instructor.courses_url}>
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
          : null
        }

      </div>
    </Card>
  )
}

InstructorStats.propTypes = {
  instructor: PropTypes.object.isRequired,
}

export default InstructorStats
