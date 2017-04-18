import React from 'react'
import {internet, lorem, random, name} from 'faker'
import colors from 'utils/colors'
import {lessonStates} from 'utils/lessonStates'
import Authentication from '../../components/Authentication'

import Anchor, {types as anchorTypes} from 'components/Anchor'
import Avatar, {sizes as avatarSizes} from 'components/Avatar'
import Button, {sizes as buttonSizes} from 'components/Button'
import Card, {levels as cardLevels} from 'components/Card'
import ContainerWidth from 'components/ContainerWidth'
import Error from 'components/Error'
import Heading, {levels as headingLevels} from 'components/Heading'
import Icon, {types as iconTypes, sizes as iconSizes} from 'components/Icon'
import IconLabel from 'components/IconLabel'
import Image from 'components/Image'
// import InstructorLessons from 'components/InstructorLessons'
import InstructorRevenue from 'components/InstructorRevenue'
// import InstructorStats from 'components/InstructorStats'
import LayoutColumns from 'components/LayoutColumns'
// import LessonActions from 'components/LessonActions'
import LessonOverviews from 'components/LessonOverviews'
// import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'
import List from 'components/List'
import Loading from 'components/Loading'
import Markdown from 'components/Markdown'
import Maybe from 'components/Maybe'
import Open from 'components/Open'
import Paragraph, {types as paragraphTypes} from 'components/Paragraph'
import Prompt from 'components/Prompt'
import Request, {methods as requestMethods} from 'components/Request'
// import RequestedLessons from 'components/RequestedLessons'
import Tabs from 'components/Tabs'
import TitleCard from 'components/TitleCard'
import Toggle, {selectedItems as toggleSelectedItems} from 'components/Toggle'

const getLoginUrl = () => (
  `${process.env.REACT_APP_EGGHEAD_BASE_URL}/users/jwt?return_to=${window.location.href}`
)

const createNodeExample = () => random.arrayElement([
  <div>
    <div>
      <Avatar
        name={name.firstName()}
        url={internet.avatar()}
      />
    </div>
    <Button>
      {lorem.words()}
    </Button>
  </div>,
  <div>
    <div>
      {lorem.paragraph()}
    </div>
    <Anchor url={internet.url()}>
      {lorem.words()}
    </Anchor>
  </div>,
])

export const resourcesByType = {

  components: {
    urlBase: '/components',
    items: {

      Anchor: {
        types: {
          'children*': 'string',
          'url*': 'string',
          'isSeparateTab': 'bool',
          'type': anchorTypes,
          'color': 'colors',
        },
        createExamples: () => [
          <Anchor url={internet.url()}>
            {lorem.words()}
          </Anchor>,
          <Anchor 
            url={internet.url()}
            type='prominent'
          >
            {lorem.words()}
          </Anchor>,
          <Anchor 
            url={internet.url()}
            color={random.arrayElement(colors)}
          >
            {lorem.words()}
          </Anchor>,
        ],
      },

      Avatar: {
        types: {
          'name*': 'string',
          'url*': 'string',
          'size': avatarSizes,
        },
        createExamples: () => [
          <Avatar
            name={name.firstName()}
            url={internet.avatar()}
          />,
          <Avatar
            name={name.firstName()}
            url={internet.avatar()}
            size={random.arrayElement(avatarSizes)}
          />,
        ],
      },

      Button: {
        types: {
          'children*': 'node',
          'href': 'string',
          'onClick': 'func',
          'color': 'colors',
          'size': buttonSizes,
          'outline': 'bool',
          'pill': 'bool',
        },
        createExamples: () => [
          <Button>
            {lorem.words()}
          </Button>,
          <Button
            href={internet.url()}
            color={random.arrayElement(colors)}
            size={random.arrayElement(buttonSizes)}
            outline={random.boolean()}
            pill={random.boolean()}
          >
            {lorem.words()}
          </Button>,
        ],
      },

      Card: {
        types: {
          'children*': 'node',
          'level': cardLevels,
        },
        createExamples: () => [
          <Card>
            {lorem.words()}
          </Card>,
          <Card level={random.arrayElement(cardLevels)}>
            {createNodeExample()}
          </Card>,
        ],
      },

      ContainerWidth: {
        types: {
          'children*': 'func',
          'onWidthChange': 'func',
        },
        createExamples: () => [
          <ContainerWidth>
            {(containerWidth) => <div>containerWidth: {containerWidth}</div>}
          </ContainerWidth>,
        ],
      },

      Error: {
        types: {
          'children*': 'string',
        },
        createExamples: () => [
          <Error>
            {lorem.sentence()}
          </Error>,
        ],
      },

      Heading: {
        types: {
          'children*': 'string',
          'level': headingLevels,
        },
        createExamples: () => [
          <Heading level={random.arrayElement(cardLevels)}>
            {lorem.words()}
          </Heading>,
        ],
      },

      Icon: {
        types: {
          'type*': iconTypes,
          'size': iconSizes,
          'color': 'colors',
        },
        createExamples: () => [
          <Icon type='add' />,
          <Icon
            type={random.arrayElement(iconTypes)}
            size={random.arrayElement(iconSizes)}
            color={random.arrayElement(colors)}
          />,
        ],
      },

      IconLabel: {
        types: {
          'iconType*': iconTypes,
          'labelText*': 'string',
          'color': 'colors',
        },
        createExamples: () => [
          <IconLabel
            iconType='add'
            labelText={lorem.words()}
          />,
          <IconLabel
            iconType={random.arrayElement(iconTypes)}
            labelText={lorem.words()}
            color={random.arrayElement(colors)}
          />,
        ],
      },

      Image: {
        types: {
          'src*': 'string',
          'alt*': 'string',
          'className': 'string',
        },
        createExamples: () => [
          <Image 
            src={random.image()}
            alt={lorem.words()}
          />,
        ],
      },

      InstructorRevenue: {
        types: {
          'revenueUrl*': 'string',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <InstructorRevenue revenueUrl={instructor.revenue_url} />
            )}
          </Authentication>,
        ],
      },

      LayoutColumns: {
        types: {
          'items*': '[node]',
          'relativeSizes': '[number]',
        },
        createExamples: () => [
          <LayoutColumns 
            items={[
              createNodeExample(),
              createNodeExample(),
              createNodeExample(),
            ]}
          />,
          <LayoutColumns 
            items={[
              createNodeExample(),
              createNodeExample(),
            ]}
            relativeSizes={random.arrayElement([
              [1, 1], 
              [2, 1], 
              [3, 1], 
              [1, 2], 
              [1, 3], 
            ])}
          />,
        ],
      },

      LessonOverviews: {
        types: {
          'states*': lessonStates,
          'fallback*': 'node',
          'instructor': 'object',
          'pageSize': 'number',
          'includeLessonsInCourses': 'bool',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <LessonOverviews
                states={[random.arrayElement(lessonStates)]}
                fallback={
                  <Prompt
                    description='No lessons to show'
                    actionText='Create a new lesson'
                    action={'/lessons/new'}
                  />
                }
                instructor={instructor}
                includeLessonsInCourses
              />
            )}
          </Authentication>,
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <LessonOverviews
                states={lessonStates}
                fallback={
                  <Prompt
                    description='No lessons to show'
                    actionText='Create a new lesson'
                    action={'/lessons/new'}
                  />
                }
              />
            )}
          </Authentication>,
        ],
      },

      List: {
        types: {
          'items*': '[node]',
        },
        createExamples: () => [
          <List items={[
            createNodeExample(),
            createNodeExample(),
            createNodeExample(),
            createNodeExample(),
            createNodeExample(),
          ]} />,
        ],
      },

      Loading: {
        types: {},
        createExamples: () => [
          <Loading />,
        ],
      },

      Markdown: {
        types: {
          'children*': 'string',
        },
        createExamples: () => [
          <Markdown>
            {`${lorem.words()} \`${lorem.word()}\` **${lorem.words()}**`}
          </Markdown>,
        ],
      },

      Maybe: {
        types: {
          'children*': 'node',
          'condition*': 'bool',
        },
        createExamples: () => [
          <Maybe condition={random.boolean()}>
            {createNodeExample()}
          </Maybe>,
        ],
      },

      Open: {
        types: {
          'children*': 'func',
        },
        createExamples: () => [
          <Open>
            {({isOpen, handleOpenToggleClick}) => (
              <div>
                <div className='mb3'>
                  isOpen: {`${isOpen}`}
                </div>
                <Button 
                  onClick={handleOpenToggleClick}
                  color='dark-gray'
                  size='extra-small'
                >
                  Example click handler
                </Button>
              </div>
            )}
          </Open>
        ],
      },

      Paragraph: {
        types: {
          'children*': 'string',
          'type': paragraphTypes,
        },
        createExamples: () => [
          <Paragraph>
            {lorem.paragraph()}
          </Paragraph>,
          <Paragraph type={random.arrayElement(paragraphTypes)}>
            {lorem.paragraph()}
          </Paragraph>
        ],
      },

      Prompt: {
        types: {
          'description*': 'string',
          'actionText*': 'string',
          'action*': 'string',
        },
        createExamples: () => [
          <Prompt
            description={lorem.sentence()}
            actionText={lorem.words()}
            action={internet.url()}
          />,
        ],
      },

      Request: {
        types: {
          'children*': 'func',
          'url*': 'string',
          'lazy': 'bool',
          'placeholder': 'node',
          'params': 'object',
          'headers': 'object',
          'body': 'object',
          'onResponse': 'func',
          'onData': 'func',
          'onError': 'func',
          'method': requestMethods,
          'subscribe': 'bool',
          'subscribeInterval': 'number'
        },
        createExamples: () => [
          <Request url='https://jsonplaceholder.typicode.com/users'>
            {({data}) => (
              <div>
                {JSON.stringify(data, null, 2)}
              </div>
            )}
          </Request>,
          <Request url='https://error'>
            {({data}) => (
              <div>
                {JSON.stringify(data, null, 2)}
              </div>
            )}
          </Request>,
          <Request 
            url='https://jsonplaceholder.typicode.com/users'
            placeholder={createNodeExample()}
          >
            {({data}) => (
              <div>
                {JSON.stringify(data, null, 2)}
              </div>
            )}
          </Request>,
          <Request
            lazy
            url='https://jsonplaceholder.typicode.com/users'
          >
            {({request, data}) => data
              ? <div>
                  {JSON.stringify(data, null, 2)}
                </div>
              : <a onClick={() => request()}>
                  Example click handler
                </a>
            }
          </Request>
        ],
      },

      Tabs: {
        types: {
          'groups*': '{title: string, component: node}',
        },
        createExamples: () => [
          <Tabs groups={[
            {
              title: lorem.words(),
              component: createNodeExample(),
            },
            {
              title: lorem.words(),
              component: createNodeExample(),
            },
            {
              title: lorem.words(),
              component: createNodeExample(),
            },
          ]} />,
        ],
      },

      TitleCard: {
        types: {
          'children*': 'node',
          'title*': 'string',
          'description': 'string',
          'intro': 'node',
          'subtle': 'bool',
        },
        createExamples: () => [
          <TitleCard title={lorem.words()}>
            {createNodeExample()}
          </TitleCard>,
          <TitleCard 
            title={lorem.words()}
            description={lorem.sentence()}
            intro={createNodeExample()}
            subtle={random.boolean()}
          >
            {createNodeExample()}
          </TitleCard>,
        ],
      },

      Toggle: {
        types: {
          'leftOption*': 'string',
          'rightOption*': 'string',
          'onClick': 'func',
          'selectedItem': toggleSelectedItems,
        },
        createExamples: () => [
          <Toggle
            leftOption={lorem.word()}
            rightOption={lorem.word()}
          />,
          <Toggle
            leftOption={lorem.word()}
            rightOption={lorem.word()}
            selectedItem={random.arrayElement(toggleSelectedItems)}
          />,
        ],
      },

    }
  },

  screens: {
    urlBase: '/screens',
  },

  utilities: {
    urlBase: '/utils',
  },
}

export default resourcesByType
