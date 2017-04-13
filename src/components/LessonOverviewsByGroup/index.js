import React from 'react'
import {map, compact} from 'lodash'
import {Text} from 'react-localize'
import {Maybe, Tabs} from 'egghead-ui'
import {publicLessonsUrl} from 'utils/urls'
import {hasUnlockedSelfReview} from 'utils/milestones'
import LessonOverviews from 'components/LessonOverviews'
import Prompt from 'components/Prompt'

export default ({instructor}) => {

  const items = compact([
    {
      title: <Text message='lessonOverviewsByGroup.inProgress.title' />,
      states: [
        'accepted',
        'claimed',
        'rejected',
      ],
      includeLessonsInCourses: true,
    },
    {
      title: <Text message='lessonOverviewsByGroup.inReview.title' />,
      description: (
        <span>
          <Text message='lessonOverviewsByGroup.inReview.description' />
          <Maybe condition={Boolean(instructor && hasUnlockedSelfReview(instructor.published_lessons))}>
            <span>
              <span>{` `}</span>
              <Text message='lessonOverviewsByGroup.inReview.selfApproval' />
            </span>
          </Maybe>
        </span>
      ),
      states: [
        'proposed',
        'submitted',
        'updated',
      ],
      includeLessonsInCourses: true,
    },
    {
      title: <Text message='lessonOverviewsByGroup.inQueue.title' />,
      description: <Text message='lessonOverviewsByGroup.inQueue.description' />,
      states: [
        'approved'
      ],
      includeLessonsInCourses: false,
    },
  ])

  return (
    <Tabs groups={[
      ...map(items, (item) => ({
        title: item.title,
        component: (
          <div>
            <Maybe condition={Boolean(item.description)}>
              <div className='pv3 f6'>
                {item.description}
              </div>
            </Maybe>
            <div className='mt3'>
              <LessonOverviews
                states={item.states}
                fallback={
                  <Prompt
                    description={<Text message='lessonOverviewsByGroup.fallback' />}
                    actionText={<Text message='lessonOverviewsByGroup.action' />}
                    action={'/lessons/new'}
                  />
                }
                instructor={instructor}
                includeLessonsInCourses={item.includeLessonsInCourses}
              />
            </div>
          </div>
        ),
      })),
      {
        title: <Text message='lessonOverviewsByGroup.published.title' />,
        component: (
          <div className='mt3'>
            <Prompt
              description={<Text message='lessonOverviewsByGroup.published.description' />}
              actionText={<Text message='lessonOverviewsByGroup.published.action' />}
              action={publicLessonsUrl}
            />
          </div>
        ),
      },
    ]} />
  )
}
