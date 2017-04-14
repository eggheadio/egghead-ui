import React, {PropTypes} from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = ({items}) => (
  <nav className='bg-base-secondary'>
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
  </nav>
)

Navigation.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    exact: PropTypes.bool,
  })).isRequired,
}

export default Navigation
