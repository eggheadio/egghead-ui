import React from 'react'

import logo from './assets/egghead-logo-white.svg'

const Footer = () => (
  <footer className='bg-dark-navy pb2 ph3'>
    <div className='mw8 center'>
      <div className='flex justify-between items-center pv3 bb b--light-navy'>
        <a href='' className='db mv2'>
          <img
            src={logo}
            className='db'
            alt='egghead.io'
          />
        </a>
        <div className='flex items-center f6 f5-ns'>
          <div className='light-gray tr tl-ns flex flex-column flex-row-ns'>
            <span className='white'>1,143</span>
            <span className='ml2-ns'>Lessons</span>
          </div>
          <div className='light-gray tr tl-ns flex flex-column flex-row-ns ml3 ml4-ns'>
            <span className='white'>32</span>
            <span className='ml2-ns'>Courses</span>
          </div>
        </div>
      </div>
      <div className='pt4 pb4 pb5-ns mt2-ns flex flex-column flex-row-l justify-between items-start bb b--light-navy'>
        <div className='flex flex-column order-last-l mb4 pb3 mb0-l w-100 w-auto-ns'>
          <h4 className='avenir normal f5 f4-ns mt0 mb3 white'>Search for Lessons and Courses</h4>
          <input type='text' className='w-100 bg-light-navy br2 bn pa2'/>
        </div>
        <div className='flex order-0-l justify-between justify-start-ns w-100 w-auto-ns'>
          <div className=''>
            <h5 className='avenir f6 f5-ns ttu tracked gray fw6 mt0 mb2 mb3-ns'>Egghead</h5>
            <ul className='list flex flex-column ma0 pa0 f6 f5-ns'>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Browse</a>
              </li>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Course</a>
              </li>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Lessons</a>
              </li>
            </ul>
          </div>
          <div className='ml5-ns'>
            <h5 className='avenir f6 f5-ns ttu tracked gray fw6 mt0 mb2 mb3-ns'>About</h5>
            <ul className='list flex flex-column ma0 pa0 f6 f5-ns'>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Instructors</a>
              </li>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Reviews</a>
              </li>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Pricing</a>
              </li>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='ml5-ns'>
            <h5 className='avenir f6 f5-ns ttu tracked gray fw6 mt0 mb2 mb3-ns'>Profile</h5>
            <ul className='list flex flex-column ma0 pa0 f6 f5-ns'>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Login</a>
              </li>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Sign Up Free</a>
              </li>
              <li className='pv1'>
                <a href='' className='link lh-copy light-gray hover-white no-underline'>Go Pro</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='pv3 mt2 flex flex-column flex-row-ns justify-between items-center f6'>
        <ul className='list pa0 mt0 mb4 mb0-ns flex gray'>
          <li>
            <a href='' className='link no-underline gray hover-white'>Terms & Conditions</a>
          </li>
          <li className='ml4'>
            @egghead.io
          </li>
        </ul>
        <ul className='list pa0 ma0 flex items-center gray'>
          <li>We're social too</li>
          <li className='ml3'>
            <a href='' className='link flex items-center justify-center br2 f5 no-underline db pa2 w2 h2 white fa fa-facebook' style={{background: '#304c95'}}></a>
          </li>
          <li className='ml3'>
            <a href='' className='link flex items-center justify-center br1 f5 no-underline db pa2 w2 h2 white fa fa-twitter' style={{background: '#0f87f4'}}></a>
          </li>
          <li className='ml3'>
            <a href='' className='link flex items-center justify-center br2 f5 no-underline db pa2 w2 h2 white fa fa-google-plus' style={{background: '#da4334'}}></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
