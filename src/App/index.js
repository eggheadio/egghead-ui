import 'tachyons-egghead'
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import RouteNotFound from './components/RouteNotFound'
import Readme from './components/Readme'
import ComponentsDirectory from './components/ComponentsDirectory'
import ScreensDirectory from './components/ScreensDirectory'
import UtilitiesDirectory from './components/UtilitiesDirectory'

const navigationItems = [
  {
    exact: true,
    label: 'README',
    path: '/',
    component: Readme,
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

      <main className='pa4'>
        <Switch>
          {navigationItems.map((navigationItem) => (
            <Route 
              key={navigationItem.label}
              exact={navigationItem.exact}
              path={navigationItem.path}
              component={navigationItem.component}
            />
          ))}
          <Route component={RouteNotFound} />
        </Switch>
      </main>

    </div>
  </BrowserRouter>
)

export default App
