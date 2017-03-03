import React from 'react'

import logo from './assets/egghead-logo-white.svg'

const StaticHeader = () => (
  <header className='bg-navy ph3'>
    <div className='mw8 center'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <a href='/' className='db'>
            <img src={logo} alt='' className='db'/>
          </a>
          <ul className='list avenir ttu flex mv0 ml3' style={{'fontSize': '12px'}}>
            <li>
              <a href='/' className='link db ph3 pv2 white hover-white tracked bb bw2 b--orange'>
                <span className='flex items-center h2 mh2 mv1 bt bw2 b--transparent'>Browse</span>
              </a>
            </li>
            <li>
              <a href='/' className='link db ph3 pv2 white-60 hover-white tracked bb bw2 b--transparent'>
                <span className='flex items-center h2 mh2 mv1 bt bw2 b--transparent'>Courses</span>
              </a>
            </li>
            <li>
              <a href='/' className='link db ph3 pv2 white-60 hover-white tracked bb bw2 b--transparent'>
                <span className='flex items-center h2 mh2 mv1 bt bw2 b--transparent'>Lessons</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className='list pl0 mv0 flex items-center'>
          <li>
            <a href='/' className='link db ttu ba b--turquoise turquoise pa2 br-pill avenir tracked' style={{'fontSize': '12px'}}>Go pro</a>
          </li>
          <li className='ml3 pl2 self-stretch'>
            <div className='relative h-100 flex items-center'>
              <div className='flex'>
                <div className="flex items-center">
                  <span className="white">Maggie</span>
                </div>
              </div>
              <div className='absolute w4 pa3 ba b--green br3 right-0' style={{'top': '100%'}}>Dropdown</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default StaticHeader
