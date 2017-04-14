import 'tachyons-egghead'
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {map} from 'lodash'
import componentResources from './componentResources'
import screenResources from './screenResources'
import utilityResources from './utilityResources'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Usage from './components/Usage'
import Directory from './components/Directory'

const navigationItems = [
  {
    label: 'Usage',
    path: '/',
    children: <Usage />,
    exact: true,
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
