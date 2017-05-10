import React, {PropTypes} from 'react'
import {NavLink} from 'react-router-dom'
import windowMock from 'package/utils/windowMock'
import Button from 'package/components/Button'
import logout from 'package/utils/logout'

const universalWindow = typeof(window) === 'undefined' 
  ? windowMock 
  : window

const Navigation = ({items}) => (
  <nav className='bg-base-secondary'>
    <div>
      {items.map((item) => (
        <NavLink
          key={item.label}
          exact
          className='flex pa3 white no-underline'
          activeClassName='orange'
          to={item.path}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
    <div className='pv4 ph3'>
      {universalWindow.localStorage.getItem('token')
        ? <Button 
            onClick={logout}
            size='small'
            overDark
          >
            Logout
          </Button>
        : null
      }
    </div>
  </nav>
)

Navigation.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
}

export default Navigation
