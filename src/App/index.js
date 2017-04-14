import 'tachyons-egghead'
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Heading from 'components/Heading'
import Navigation from './components/Navigation'
import RouteNotFound from './components/RouteNotFound'
import Usage from './components/Usage'
import ComponentsDirectory from './components/ComponentsDirectory'
import ScreensDirectory from './components/ScreensDirectory'
import UtilitiesDirectory from './components/UtilitiesDirectory'

const navigationItems = [
  {
    exact: true,
    label: 'Usage',
    path: '/',
    component: Usage,
  },
  {
    exact: true,
    label: 'Components',
    path: '/components',
    component: ComponentsDirectory,
  },
  {
    exact: true,
    label: 'Screens',
    path: '/screens',
    component: ScreensDirectory,
  },
  {
    exact: true,
    label: 'Utilities',
    path: '/utils',
    component: UtilitiesDirectory,
  },
]

const App = () => (
  <BrowserRouter>
    <div className='flex-ns'>

      <aside>
        <Navigation items={navigationItems} />
      </aside>

      <Switch>
        {navigationItems.map((navigationItem) => (
          <Route 
            key={navigationItem.label}
            exact={navigationItem.exact}
            path={navigationItem.path}
            render={() => (
              <main className='pa4'>
                <Heading level='1'>
                  {navigationItem.label}
                </Heading>
                <navigationItem.component />
              </main>
            )}
          />
        ))}
        <Route component={RouteNotFound} />
      </Switch>

    </div>
  </BrowserRouter>
)

export default App
