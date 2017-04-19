import React from 'react'
import {map, uniq, compact, isString, size, filter} from 'lodash'
import {chatInfoUrl, roughDraftInfoUrl, gearSetupInfoUrl} from 'utils/urls'
import {hasUnlockedPublished} from 'utils/instructorMilestones'
import createLessonsUrl from 'utils/createLessonsUrl'
import {Maybe} from 'components/Maybe'
import TitleCard from 'components/TitleCard'
import isStepComplete from './utils/isStepComplete'
import Progress from './components/Progress'
import Checklist from './components/Checklist'

export default ({instructor}) => (
  <Maybe condition={!hasUnlockedPublished(instructor.published_lessons)}>
    <Request
      url={createLessonsUrl({
        lessons_url: instructor.lessons_url
      })}
      subscribe
    >
      {({data}) => {
        const instructorLessonStates = compact(uniq(map(data, 'state')))

        const checklistItems = [
          {
            isComplete: true,
            description: 'Create instructor account',
          },
          {
            isComplete: isString(instructor.slack_id),
            description: 'Join egghead Slack',
            moreInfoUrl: chatInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'claimed'),
            description: 'Claim new lesson',
            action: '/lessons/new',
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'submitted'),
            description: 'Submit rough draft',
            moreInfoUrl: roughDraftInfoUrl,
          },
          {
            isComplete: isString(instructor.gear_tracking_id),
            description: 'Get gear',
            moreInfoUrl: gearSetupInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'updated'),
            description: 'Re-record with gear',
            moreInfoUrl: roughDraftInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'approved'),
            description: 'Iterate until approved',
            moreInfoUrl: roughDraftInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'published'),
            description: 'Publish lesson',
          },
        ]

        return (
          <TitleCard
            title='To Do'
            description='Work with your mentor to complete these items so you can get published.'
            intro={
              <Progress 
                total={size(checklistItems)}
                complete={size(filter(checklistItems, 'isComplete'))}
              />
            }
          >
            <Checklist items={checklistItems} />
          </TitleCard>
        )
      }}
    </Request>
  </Maybe>
)
