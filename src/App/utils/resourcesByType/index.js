import React from 'react'
import {internet, lorem, random, name} from 'faker'
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
import InstructorLessons from 'components/InstructorLessons'
import InstructorRevenue from 'components/InstructorRevenue'
import InstructorStats from 'components/InstructorStats'
import LayoutColumns from 'components/LayoutColumns'
import LessonActions from 'components/LessonActions'
import LessonOverviews from 'components/LessonOverviews'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'
import List from 'components/List'
import Loading from 'components/Loading'
import Markdown from 'components/Markdown'
import Maybe from 'components/Maybe'
import Open from 'components/Open'
import Paragraph, {types as paragraphTypes} from 'components/Paragraph'
import Prompt from 'components/Prompt'
import Request, {methods as requestMethods} from 'components/Request'
import RequestedLessons from 'components/RequestedLessons'
import Tabs from 'components/Tabs'
import TitleCard from 'components/TitleCard'
import Toggle, {selectedItems as toggleSelectedItems} from 'components/Toggle'

import InstructorDashboard from 'screens/InstructorDashboard'
import InstructorDetails from 'screens/InstructorDetails'
import InstructorsDirectory from 'screens/InstructorsDirectory'
import LessonDetails from 'screens/LessonDetails'
import LessonsDirectory from 'screens/LessonsDirectory'
import NewLesson from 'screens/NewLesson'

import colors from 'utils/colors'
import colorValues from 'utils/colorValues'

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
        arguments: {
          'children*': 'node',
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
        arguments: {
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
        arguments: {
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
        arguments: {
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
        arguments: {
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
        arguments: {
          'children*': 'string',
        },
        createExamples: () => [
          <Error>
            {lorem.sentence()}
          </Error>,
        ],
      },

      Heading: {
        arguments: {
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
        arguments: {
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
        arguments: {
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
        arguments: {
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

      InstructorLessons: {
        arguments: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <InstructorLessons instructor={instructor} />
            )}
          </Authentication>,
        ],
      },

      InstructorRevenue: {
        arguments: {
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

      InstructorStats: {
        arguments: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <InstructorStats instructor={instructor} />
            )}
          </Authentication>,
        ],
      },

      LayoutColumns: {
        arguments: {
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

      LessonActions: {
        arguments: {
          'lesson*': 'object',
          'requestLesson': 'func',
          'requestCurrentPage': 'func',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <Request url={instructor.lessons_url}>
                {({request, data}) => (
                  <LessonActions
                    lesson={random.arrayElement(data)}
                    requestLesson={request}
                  />
                )}
              </Request>
            )}
          </Authentication>,
        ],
      },

      LessonOverviews: {
        arguments: {
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

      LessonOverviewsByGroup: {
        arguments: {
          'instructor': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <LessonOverviewsByGroup instructor={instructor} />
            )}
          </Authentication>,
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {() => (
              <LessonOverviewsByGroup />
            )}
          </Authentication>,
        ],
      },

      List: {
        arguments: {
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
        arguments: {},
        createExamples: () => [
          <Loading />,
        ],
      },

      Markdown: {
        arguments: {
          'children*': 'string',
        },
        createExamples: () => [
          <Markdown>
            {`${lorem.words()} \`${lorem.word()}\` **${lorem.words()}**`}
          </Markdown>,
        ],
      },

      Maybe: {
        arguments: {
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
        arguments: {
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
        arguments: {
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
        arguments: {
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
        arguments: {
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

      RequestedLessons: {
        arguments: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <RequestedLessons instructor={instructor} />
            )}
          </Authentication>,
        ],
      },


      Tabs: {
        arguments: {
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
        arguments: {
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
        arguments: {
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
    items: {

      InstructorDashboard: {
        arguments: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <InstructorDashboard instructor={instructor} />
            )}
          </Authentication>,
        ],
      },

      InstructorDetails: {
        arguments: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <InstructorDetails instructor={instructor} />
            )}
          </Authentication>,
        ],
      },

      InstructorsDirectory: {
        arguments: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {() => (
              <InstructorsDirectory />
            )}
          </Authentication>,
        ],
      },

      LessonDetails: {
        arguments: {
          'lesson*': 'object',
          'requestLesson': 'func',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <Request url={instructor.lessons_url}>
                {({request, data}) => (
                  <LessonDetails
                    lesson={random.arrayElement(data)}
                    requestLesson={request}
                  />
                )}
              </Request>
            )}
          </Authentication>,
        ],
      },

      LessonsDirectory: {
        arguments: {},
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {() => (
              <LessonsDirectory />
            )}
          </Authentication>,
        ],
      },

      NewLesson: {
        arguments: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication 
            loginUrl={getLoginUrl()}
            userPermissionProperty='instructor_url'
          >
            {({instructor}) => (
              <NewLesson instructor={instructor} />
            )}
          </Authentication>,
        ],
      },

    },
  },

  utilities: {
    urlBase: '/utils',
    items: {

      colors: {
        createExamples: () => [
          colors,
        ],
      },

      colorValues: {
        arguments: {
          'key*': 'colors',
        },
        createExamples: () => [
          colorValues[random.arrayElement(colors)],
        ],
      },

    },
  },
}

export default resourcesByType
