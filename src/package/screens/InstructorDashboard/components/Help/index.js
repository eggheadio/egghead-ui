import React from 'react'
import {map} from 'lodash'
import {guideUrl, chatUrl, instructorsChatUrl} from 'package/utils/urls'
import {hasUnlockedPublished} from 'package/utils/instructorMilestones'
import Maybe from 'package/components/Maybe'
import Paragraph from 'package/components/Paragraph'
import List from 'package/components/List'
import Heading from 'package/components/Heading'
import HeaderCard from 'package/components/HeaderCard'
import Anchor from 'package/components/Anchor'

const items=[
  {
    title: 'Instructor 101 Guide',
    description: `We've put together a written Instructor Guide with step by step details on creating egghead lessons and courses. It is required reading for all instructors, and will help you make great lessons.`,
    url: guideUrl,
    action: 'View the guide',
  },
  {
    title: 'Mentors',
    description: 'Joel, Trevor, and Zac can help with anything related to egghead.io.',
    url: chatUrl,
    action:  'Reach out in Slack',
  },
  {
    title: 'Slack',
    description: `The egghead-instructors Slack channel is available for instructors to chat and see each other's progress.`,
    url: instructorsChatUrl,
    action: 'View the channel',
  },
]

const Help = ({publishedLessons}) => (
  <Maybe condition={!hasUnlockedPublished(publishedLessons)}>
    <HeaderCard
      title='Got questions? Feeling stuck?'
      description='Making screencasts is hard. The first few can be frustrating. But it gets easier and faster! There are many resources to help you as well.'
      subtle
    >
      <List items={map(items, (item, index) => (
        <div key={index}>
          <Heading level='5'>
            {item.title}
          </Heading>
          <Paragraph>
            {item.description}
          </Paragraph>
          <Anchor
            url={item.url}
            type='prominent'
          >
            {item.action}
          </Anchor>
        </div>
      ))} />
    </HeaderCard>
  </Maybe>
)

export default Help
