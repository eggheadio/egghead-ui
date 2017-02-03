import React from 'react'
import {storiesOf} from '@kadira/storybook'

import imgD3 from './assets/temp/d3.svg'
import imgJquery from './assets/temp/jquery.svg'
import imgRedux from './assets/temp/redux.svg'
import imgRx from './assets/temp/rx.svg'

import './index.css'

const representOuterClasses = 'flex justify-center items-center bg-dark-navy pv5'
const representInnerClasses = 'w-100 mw8 ph2 center'

storiesOf('Static: Categories Browser')
  .addWithInfo('', () => (
    <div className={representOuterClasses}>
      <div className={representInnerClasses}>

        <div className='br2 overflow-hidden'>

          <div className='flex flex-column flex-row-ns bt b--navy categories-switchers-holder'>
            <div className='flex-grow-1 f6 f5-m f4-l lh-title pv3 pv4-ns fw5 tracked light-gray ttu tc pointer br b--navy hover-bg-light-navy link w-100 w-25-ns'>Libraries</div>
            <div className='flex-grow-1 f6 f5-m f4-l lh-title pv3 pv4-ns fw5 tracked light-gray ttu tc pointer br b--navy hover-bg-light-navy link w-100 w-25-ns'>Languages</div>
            <div className='flex-grow-1 f6 f5-m f4-l lh-title pv3 pv4-ns fw5 tracked light-gray ttu tc pointer br b--navy hover-bg-light-navy link w-100 w-25-ns'>Frameworks</div>
            <div className='flex-grow-1 f6 f5-m f4-l lh-title pv3 pv4-ns fw5 tracked light-gray ttu tc pointer br b--navy hover-bg-light-navy link w-100 w-25-ns'>Tools</div>
          </div>

          <div className='flex flex-wrap f5 f4-l avenir bb b--navy bg-navy white categories-items-holder'>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h4 category-item expanded'>
                <span className='ml1 flex-grow-1'>D3</span>
                <div className='flex justify-end items-center'>
                  <img src={imgD3} className='w2 w3-l' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h4 category-item expanded'>
                <span className='ml1 flex-grow-1'>MobX</span>
                <div className='flex justify-end items-center'>
                  <img src={imgRedux} className='w2 w3-l' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h4 category-item expanded'>
                <span className='ml1 flex-grow-1'>Reflux</span>
                <div className='flex justify-end items-center'>
                  <img src={imgJquery} className='w2 w3-l' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h4 category-item expanded'>
                <span className='ml1 flex-grow-1'>RxJS</span>
                <div className='flex justify-end items-center'>
                  <img src={imgRx} className='w2 w3-l' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>Mocha</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>Nightmer</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>Jasmine</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>Redux</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>MomentJS</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>TweenMzx</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='w-50 w-third-m w-25-l flex flex-column'>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>Riot</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='flex items-center w-100 bg-light-navy pv4 ph3 bb br b--navy pointer link h3 category-item'>
                <span className='ml1 flex-grow-1'>jQuery</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center ph2 pv3 f6 lh-copy bg-light-navy h3 white br b--navy categories-item-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>

        </div>

      </div>
    </div>
  ))
