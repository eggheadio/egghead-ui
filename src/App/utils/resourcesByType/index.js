import React from 'react'
import {internet, lorem, random, name} from 'faker'
import {containerWidths} from 'utils/hardCodedSizes'
import {lessonStates} from 'utils/lessonStates'
import Authentication from '../../components/Authentication'

import Anchor, {types as anchorTypes} from 'components/Anchor'
import Avatar, {sizes as avatarSizes} from 'components/Avatar'
import Button, {sizes as buttonSizes} from 'components/Button'
import Card, {levels as cardLevels} from 'components/Card'
import ContainerWidth from 'components/ContainerWidth'
import Error from 'components/Error'
import HeaderCard from 'components/HeaderCard'
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
    <IconLabel
      iconType='edit'
      labelText={lorem.words()}
    />
    <IconLabel
      iconType='check'
      labelText={lorem.words()}
    />
  </div>,

  <div>
    <Heading level='3'>
      {lorem.words()}
    </Heading>
    <Toggle
      leftOption={lorem.word()}
      rightOption={lorem.word()}
    />
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
        useCase: `Used in place of the html <a> to link to other pages.`,
        types: {
          'children*': 'node',
          'url*': 'string',
          'isSeparateTab': 'bool',
          'type': anchorTypes,
          'color': colors,
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
        useCase: `Used to display a person's picture.`,
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
        useCase: `Used to give the user an action to take.`,
        types: {
          'children*': 'node',
          'href': 'string',
          'onClick': 'func',
          'size': buttonSizes,
          'outline': 'bool',
          'pill': 'bool',
          'color': colors,
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
        useCase: `Used to display related node(s) in a container with a hierarchy.`,
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
        useCase: `Used to get the current node's container width.`,
        types: {
          'children*': 'func',
          'onWidthChange': 'func',
        },
        childrenTypes: {
          'containerWidth': containerWidths,
        },
        createExamples: () => [
          <ContainerWidth>
            {(containerWidth) => <div>containerWidth: {containerWidth}</div>}
          </ContainerWidth>,
        ],
        optOut: ['types', 'containerBackground'],
      },

      Error: {
        useCase: `Used to display an error to the user.`,
        types: {
          'children*': 'string',
        },
        createExamples: () => [
          <Error>
            {lorem.sentence()}
          </Error>,
        ],
      },

      HeaderCard: {
        useCase: `Used to display a Card with a header.`,
        types: {
          'children*': 'node',
          'title*': 'string',
          'description': 'string',
          'intro': 'node',
          'subtle': 'bool',
        },
        createExamples: () => [
          <HeaderCard title={lorem.words()}>
            {createNodeExample()}
          </HeaderCard>,
          <HeaderCard 
            title={lorem.words()}
            description={lorem.sentence()}
            intro={createNodeExample()}
            subtle={random.boolean()}
          >
            {createNodeExample()}
          </HeaderCard>,
        ],
      },

      Heading: {
        useCase: `Used to label related node(s) with a hierarchy.`,
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
        useCase: `Used to display a vector graphic.`,
        types: {
          'type*': iconTypes,
          'size': iconSizes,
          'color': colors,
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
        useCase: `Used to display a vector graphic with a label.`,
        types: {
          'iconType*': iconTypes,
          'labelText*': 'string',
          'color': colors,
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
        useCase: `Used to display a raster graphic.`,
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

      InstructorLessons: {
        useCase: `Used to display the lessons of a specific instructor.`,
        types: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <Request url={data.instructors_url}>
                {({data}) => (
                  <InstructorLessons instructor={random.arrayElement(data)} />
                )}
              </Request>
            )}
          </Authentication>,
        ],
      },

      InstructorRevenue: {
        useCase: `Used to display the revenue of a specific instructor.`,
        types: {
          'revenueUrl*': 'string',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <Request url={data.instructors_url}>
                {({data}) => (
                  <InstructorRevenue revenueUrl={random.arrayElement(data).revenue_url} />
                )}
              </Request>
            )}
          </Authentication>,
        ],
      },

      InstructorStats: {
        useCase: `Used to display the stats of a specific instructor.`,
        types: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <Request url={data.instructors_url}>
                {({data}) => (
                  <InstructorStats instructor={random.arrayElement(data)} />
                )}
              </Request>
            )}
          </Authentication>,
        ],
      },

      LayoutColumns: {
        useCase: `Used to group nodes into columns when the container's width is large enough; otherwise the groups stack vertically.`,
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

      LessonActions: {
        useCase: `Used to take action on a specific lesson.`,
        types: {
          'lesson*': 'object',
          'requestLesson': 'func',
          'requestCurrentPage': 'func',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <Request url={data.lessons_url}>
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
        useCase: `Used to show a collection of lessons.`,
        types: {
          'states*': lessonStates,
          'fallback*': 'node',
          'instructor': 'object',
          'pageSize': 'number',
          'includeLessonsInCourses': 'bool',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => {
              const rootData = data
              return (
                <Request url={rootData.instructors_url}>
                  {({data}) => (
                    <LessonOverviews
                      states={[random.arrayElement(lessonStates)]}
                      fallback={
                        <Prompt
                          description='No lessons to show'
                          actionText='Create a new lesson'
                          action={'/lessons/new'}
                        />
                      }
                      lessonsUrl={rootData.lessons_url}
                      includeLessonsInCourses
                    />
                  )}
                </Request>
              )
            }}
          </Authentication>,
        ],
      },

      LessonOverviewsByGroup: {
        useCase: `Used to show a collection of lessons organized by lesson state groups.`,
        types: {
          'instructor': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <Request url={data.instructors_url}>
                {({data}) => {
                  const instructor = random.arrayElement(data)
                  return (
                    <LessonOverviewsByGroup 
                      lessonsUrl={instructor.lessons_url}
                      instructor={instructor} 
                    />
                  )
                }}
              </Request>
            )}
          </Authentication>,
        ],
      },

      List: {
        useCase: `Used to show a collection of nodes in a vertical stack.`,
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
        useCase: `Used to let the user know something is loading.`,
        createExamples: () => [
          <Loading />,
        ],
        optOut: ['types'],
      },

      Markdown: {
        useCase: `Used to display markdown strings.`,
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
        useCase: `Used to conditionally display a node or null.`,
        types: {
          'children*': 'node',
          'condition*': 'bool',
        },
        createExamples: () => [
          <Maybe condition={random.boolean()}>
            {createNodeExample()}
          </Maybe>,
        ],
        optOut: ['containerWidth', 'containerBackground'],
      },

      Open: {
        useCase: `Used to toggle a boolean state.`,
        types: {
          'children*': 'func',
        },
        childrenTypes: {
          'isOpen': 'bool',
          'handleOpenToggleClick': 'func',
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
        optOut: ['containerWidth', 'containerBackground', 'types'],
      },

      Paragraph: {
        useCase: `Used to display a paragraph of text.`,
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
        useCase: `Used as a fallback to prompt the user to take action.`,
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
        useCase: `Used to make requests to endpoints.`,
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
        childrenTypes: {
          'handleOpenToggleClick': 'func',
          'request': 'func',
          'running': 'bool',
          'error': 'object',
          'data': 'object',
          'response': 'object',
        },
        createExamples: () => [
          <Request url='https://jsonplaceholder.typicode.com/users/1'>
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
            lazy
            url='https://jsonplaceholder.typicode.com/users/1'
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
        optOut: ['containerWidth', 'containerBackground', 'types'],
      },

      RequestedLessons: {
        useCase: `Used to give instructors a list of options for starting a new lesson.`,
        types: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => {
              const rootData = data
              return (
                <Request url={rootData.instructor_url}>
                  {({data}) => (
                    <RequestedLessons 
                      instructor={data} 
                      lessonsUrl={rootData.lessons_url}
                    />
                  )}
                </Request>
              )
            }}
          </Authentication>,
        ],
        optOut: ['types'],
      },

      Tabs: {
        useCase: `Used to group related nodes into tabs.`,
        types: {
          'groups*': '[{title: string, component: node}]',
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

      Toggle: {
        useCase: `Used to let the user toggle a boolean state choice.`,
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
    items: {

      InstructorDashboard: {
        useCase: `Used to show instructors their most important information. If the instructor is unpublished, it shows information for getting published. Once the instructor is published it shows the "normal" Instructor Dashboard.`,
        types: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => {
              const rootData = data
              return (
                <Request url={rootData.instructors_url}>
                  {({data}) => (
                    <InstructorDashboard 
                      instructor={random.arrayElement(data)} 
                      lessonsUrl={rootData.lessons_url}
                    />
                  )}
                </Request>
              )
            }}
          </Authentication>,
        ],
      },

      InstructorDetails: {
        useCase: `Used to show full details about a specific instructor.`,
        types: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <Request url={data.instructors_url}>
                {({data}) => (
                  <InstructorDetails instructor={random.arrayElement(data)} />
                )}
              </Request>
            )}
          </Authentication>,
        ],
      },

      InstructorsDirectory: {
        useCase: `Used to show a list of all instructors.`,
        types: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <InstructorsDirectory instructorsUrl={data.instructors_url} />
            )}
          </Authentication>,
        ],
      },

      LessonDetails: {
        useCase: `Used to show full details about a specific lesson.`,
        types: {
          'lesson*': 'object',
          'requestLesson': 'func',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <Request url={data.lessons_url}>
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
        useCase: `Used to show a list of all lessons.`,
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => (
              <LessonsDirectory lessonsUrl={data.lessons_url} />
            )}
          </Authentication>,
        ],
      },

      NewLesson: {
        useCase: `Used to help instructors start a new lesson.`,
        types: {
          'instructor*': 'object',
        },
        createExamples: () => [
          <Authentication loginUrl={getLoginUrl()}>
            {({data}) => {
              const rootData = data
              return (
                <Request url={data.instructor_url}>
                  {({data}) => (
                    <NewLesson 
                      instructor={data} 
                      lessonsUrl={rootData.lessons_url}
                    />
                  )}
                </Request>
              )
            }}
          </Authentication>,
        ],
      },

    },
  },

  utilities: {
    urlBase: '/utils',
    items: {

      colors: {
        useCase: `An array of the egghead color keys.`,
        createExamples: () => [
          colors,
        ],
        optOut: ['containerWidth', 'containerBackground', 'types'],
      },

      colorValues: {
        useCase: `An array of the egghead color keys and values.`,
        types: {
          'key*': colors,
        },
        createExamples: () => [
          colorValues[random.arrayElement(colors)],
        ],
        optOut: ['containerWidth', 'containerBackground'],
      },

    },
  },
}

export default resourcesByType
