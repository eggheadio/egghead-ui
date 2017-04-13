import React from 'react'
import {map, compact} from 'lodash'
import {List} from 'egghead-ui'
import TitleCard from 'components/TitleCard'
import Avatar from 'components/Avatar'
import InfoBit from './components/InfoBit'

export default ({instructor}) => {

  const items = compact([
    <div className='tc'>
      <Avatar
        name={instructor.full_name}
        url={instructor.avatar_url}
        size={4}
      />
    </div>,
    instructor.bio || instructor.bio_short
      ? <InfoBit
          label={'Bio'}
          value={instructor.bio_short || instructor.bio_short}
        />
      : null,
    instructor.slack_id
      ? <InfoBit
          label={'Slack'}
          value={instructor.slack_id}
          href={`https://eggheadio.slack.com/messages/@${instructor.slack_id}`}
        />
      : null,
    instructor.website
      ? <InfoBit
          label={'Website'}
          value={instructor.website}
          href={instructor.website}
        />
      : null,
    instructor.twitter
      ? <InfoBit
          label={'Twitter'}
          value={instructor.twitter}
          href={`https://twitter.com/${instructor.twitter}`}
        />
      : null,
  ])

  return (
    <TitleCard title={instructor.full_name}>
      <List items={map(items, (item, index) => item)} />
    </TitleCard>
  )
}
