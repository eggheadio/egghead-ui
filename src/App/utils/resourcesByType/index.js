import React from 'react'
import {internet, lorem, random, name} from 'faker'
import colors from 'utils/colors'
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
import InstructorRevenue from 'components/InstructorRevenue'
import LayoutColumns from 'components/LayoutColumns'
import List from 'components/List'
import Loading from 'components/Loading'

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
          'children*': 'node',
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
