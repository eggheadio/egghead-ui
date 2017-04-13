import React from 'react'
import {map, uniq, compact, isString, size, filter} from 'lodash'
import {Text} from 'react-localize'
import {chatInfoUrl, roughDraftInfoUrl, gearSetupInfoUrl} from 'utils/urls'
import {hasUnlockedPublished} from 'utils/milestones'
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
            description: <Text message='getPublished.createInstructorAccount' />,
          },
          {
            isComplete: isString(instructor.slack_id),
            description: <Text message='getPublished.joinSlack' />,
            moreInfoUrl: chatInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'claimed'),
            description: <Text message='getPublished.claimLesson' />,
            action: '/lessons/new',
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'submitted'),
            description: <Text message='getPublished.submitRoughDraft' />,
            moreInfoUrl: roughDraftInfoUrl,
          },
          {
            isComplete: isString(instructor.gear_tracking_id),
            description: <Text message='getPublished.getGear' />,
            moreInfoUrl: gearSetupInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'updated'),
            description: <Text message='getPublished.recordWithGear' />,
            moreInfoUrl: roughDraftInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'approved'),
            description: <Text message='getPublished.iterate' />,
            moreInfoUrl: roughDraftInfoUrl,
          },
          {
            isComplete: isStepComplete(instructorLessonStates, 'published'),
            description: <Text message='getPublished.publish' />,
          },
        ]

        return (
          <TitleCard
            title={<Text message='getPublished.title' />}
            description={<Text message='getPublished.description' />}
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
