import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = ({items}) => (
  <nav className='bg-base-secondary vh-100-ns'>
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

export default Navigation
