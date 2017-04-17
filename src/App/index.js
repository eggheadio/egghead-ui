import 'tachyons-egghead'
import React from 'react'
import {map} from 'lodash'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import resourcesByType from './utils/resourcesByType'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Readme from './components/Readme'
import Colors from './components/Colors'
import ResourceDirectory from './components/ResourceDirectory'
import Resource from './components/Resource'
import Contributing from './components/Contributing'

const navigationItems = [
  {
    label: 'Readme',
    path: '/',
    children: <Readme />,
    exact: true,
  },
  {
    label: 'Colors',
    path: '/colors',
    children: <Colors />,
  },
  {
    label: 'Components',
    path: resourcesByType['components'].urlBase,
    children: <ResourceDirectory resources={resourcesByType['components']} />,
  },
  {
    label: 'Screens',
    path: resourcesByType['screens'].urlBase,
    children: <ResourceDirectory resources={resourcesByType['screens']} />,
  },
  {
    label: 'Utilities',
    path: resourcesByType['utilities'].urlBase,
    children: <ResourceDirectory resources={resourcesByType['utilities']} />,
  },
  {
    label: 'Contributing',
    path: '/contributing',
    children: <Contributing />,
  },
]

const App = () => (
  <BrowserRouter>
    <div className='flex-ns items-stretch-ns'>

      <Navigation items={navigationItems} />

      <Switch>

        {map(resourcesByType, (value, key) => {
          const resources = resourcesByType[key]
          return (
            <Route 
              key={key}
              path={`${resources.urlBase}/:name`}
              render={({match}) => {
                const {name} = match.params
                return (
                  <Main title={name}>
                    <Resource 
                      name={name}
                      resource={resources.items[name]}
                    />
                  </Main>
                )
              }}
            />
          )
        })}

        {map(navigationItems, (navigationItem) => (
          <Route 
            key={navigationItem.label}
            exact={navigationItem.exact}
            path={navigationItem.path}
            render={() => (
              <Main title={navigationItem.label}>
                {navigationItem.children}
              </Main>
            )}
          />
        ))}

        <Route render={() => (
          <Main title='Route Not Found'>
            Check your URL
          </Main>
        )} />

      </Switch>

    </div>
  </BrowserRouter>
)

export default App
