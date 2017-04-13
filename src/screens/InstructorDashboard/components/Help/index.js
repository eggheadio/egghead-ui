import React from 'react'
import {map} from 'lodash'
import {Maybe, Paragraph, List, Heading} from 'egghead-ui'
import {Text} from 'react-localize'
import {guideUrl, chatUrl, instructorsChatUrl} from 'utils/urls'
import {hasUnlockedPublished} from 'utils/milestones'
import TitleCard from 'components/TitleCard'
import Anchor from 'components/Anchor'

const items=[
  {
    title: <Text message='help.guide.title' />,
    description: <Text message='help.guide.description' />,
    url: guideUrl,
    action: <Text message='help.guide.action' />,
  },
  {
    title: <Text message='help.admins.title' />,
    description: <Text message='help.admins.description' />,
    url: chatUrl,
    action: <Text message='help.admins.action' />,
  },
  {
    title: <Text message='help.chat.title' />,
    description: <Text message='help.chat.description' />,
    url: instructorsChatUrl,
    action: <Text message='help.chat.action' />,
  },
]

export default ({publishedLessons}) => (
  <Maybe condition={!hasUnlockedPublished(publishedLessons)}>
    <TitleCard
      title={<Text message='help.title' />}
      description={<Text message='help.description' />}
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
    </TitleCard>
  </Maybe>
)
