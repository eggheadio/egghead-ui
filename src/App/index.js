import 'tachyons-egghead'
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {map} from 'lodash'
import componentResources from './componentResources'
import screenResources from './screenResources'
import utilityResources from './utilityResources'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Readme from './components/Readme'
import Colors from './components/Colors'
import Directory from './components/Directory'
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
    path: '/components',
    children: <Directory resources={componentResources} />,
  },
  {
    label: 'Screens',
    path: '/screens',
    children: <Directory resources={screenResources} />,
  },
  {
    label: 'Utilities',
    path: '/utils',
    children: <Directory resources={utilityResources} />,
  },
  {
    label: 'Contributing',
    path: '/contributing',
    children: <Contributing />,
  },
]

const App = () => (
  <BrowserRouter>
    <div className='flex-ns'>

      <Navigation items={navigationItems} />

      <Switch>
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
