import React from 'react'
import {internet, lorem, random, name} from 'faker'

import Anchor, {types as anchorTypes} from 'package/components/Anchor'
import Avatar, {sizes as avatarSizes} from 'package/components/Avatar'
import Button, {sizes as buttonSizes} from 'package/components/Button'
import Card, {levels as cardLevels} from 'package/components/Card'
import ContainerWidth from 'package/components/ContainerWidth'
import Error from 'package/components/Error'
import HeaderCard from 'package/components/HeaderCard'
import Heading, {levels as headingLevels} from 'package/components/Heading'
import Icon, {types as iconTypes, sizes as iconSizes} from 'package/components/Icon'
import IconLabel from 'package/components/IconLabel'
import Image from 'package/components/Image'
import InstructorLessons from 'package/components/InstructorLessons'
import InstructorRevenue from 'package/components/InstructorRevenue'
import InstructorStats from 'package/components/InstructorStats'
import LayoutColumns from 'package/components/LayoutColumns'
import LessonActions from 'package/components/LessonActions'
import LessonOverviews from 'package/components/LessonOverviews'
import LessonOverviewsByGroup from 'package/components/LessonOverviewsByGroup'
import List from 'package/components/List'
import Loading from 'package/components/Loading'
import Markdown from 'package/components/Markdown'
import Maybe from 'package/components/Maybe'
import Open from 'package/components/Open'
import Paragraph, {types as paragraphTypes} from 'package/components/Paragraph'
import Prompt from 'package/components/Prompt'
import Request, {methods as requestMethods} from 'package/components/Request'
import RequestedLessons from 'package/components/RequestedLessons'
import Tabs from 'package/components/Tabs'
import Toggle, {selectedItems as toggleSelectedItems} from 'package/components/Toggle'
import ViewportWidth from 'package/components/ViewportWidth'

import InstructorDashboard from 'package/screens/InstructorDashboard'
import InstructorDetails from 'package/screens/InstructorDetails'
import InstructorsDirectory from 'package/screens/InstructorsDirectory'
import LessonDetails from 'package/screens/LessonDetails'
import LessonsDirectory from 'package/screens/LessonsDirectory'
import NewLesson from 'package/screens/NewLesson'

import colors from 'package/utils/colors'
import colorValues from 'package/utils/colorValues'
import {containerWidths} from 'package/utils/hardCodedSizes'
import {lessonStates} from 'package/utils/lessonStates'

import Authentication from 'App/components/Authentication'

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
        useCase: `Used in place of the inline html <a> to link to other pages.`,
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
          'onClick': 'func',
          'size': buttonSizes,
          'color': colors,
          'outline': 'bool',
        },
        createExamples: () => [
          <Button>
            {lorem.words()}
          </Button>,
          <Button
            size={random.arrayElement(buttonSizes)}
            color={random.arrayElement(colors)}
            outline={random.boolean()}
            overDark={random.boolean()}
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
        optOut: ['types', 'containerBackground', 'containerPadding'],
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
        ]
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
        optOut: ['containerWidth', 'containerBackground', 'containerPadding'],
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
                  size='small'
                >
                  Example click handler
                </Button>
              </div>
            )}
          </Open>
        ],
        optOut: ['containerWidth', 'containerBackground', 'containerPadding', 'types'],
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
              : <a 
                  onClick={() => request()}
                  className='pointer dim'
                >
                  Example click handler
                </a>
            }
          </Request>
        ],
        optOut: ['containerWidth', 'containerBackground', 'containerPadding', 'types'],
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
                      technologiesUrl={rootData.technologies_url}
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

      ViewportWidth: {
        useCase: `Used to get the current browser width. ContainerWidth is preferred in most situations unless the entire viewport width is needed.`,
        types: {
          'children*': 'func',
          'onWidthChange': 'func',
        },
        childrenTypes: {
          'isLikelyDesktop': 'bool',
        },
        createExamples: () => [
          <ViewportWidth>
            {(isLikelyDesktop) => <div>isLikelyDesktop: {`${isLikelyDesktop}`}</div>}
          </ViewportWidth>,
        ],
        optOut: ['containerBackground', 'containerPadding', 'types'],
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
                      technologiesUrl={rootData.technologies_url}
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
                      technologiesUrl={rootData.technologies_url}
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
        optOut: ['containerWidth', 'containerBackground', 'containerPadding', 'types'],
      },

      colorValues: {
        useCase: `An array of the egghead color keys and values.`,
        types: {
          'key*': colors,
        },
        createExamples: () => [
          colorValues[random.arrayElement(colors)],
        ],
        optOut: ['containerWidth', 'containerBackground', 'containerPadding'],
      },

      login: {
        useCase: `Uses local storage "token" if it exists. Adds/updates local storage "token" if there is a "jwt" query param in the URL from an egghead login URL redirect.`,
      },

      logout: {
        useCase: `Removes "token" from local storage and refreshes the page to log the user out.`,
      },

    },
  },
}

export default resourcesByType
