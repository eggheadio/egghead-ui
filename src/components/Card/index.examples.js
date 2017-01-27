import React from 'react'
import {storiesOf} from '@kadira/storybook'
import CourseCard from './CourseCard'
import LessonCard from './LessonCard'
import PlaylistCard from './PlaylistCard'
import testData from './testData'
import imgCourseCard from './assets/temp/img-course-card.png'
import imgRx from './assets/temp/rx.svg'
import imgAngular from './assets/temp/angular.svg'
import imgJs from './assets/temp/js.svg'

const representClasses = 'flex justify-center items-center bg-dark-navy pv5'

storiesOf('Cards')
  .addWithInfo('Course Card', () => (
    <div className={representClasses}>
      <CourseCard title={testData.title} instructor={testData.instructor} meta={testData.meta} />
    </div>
  ))

  .addWithInfo('Course Card Expanded Vertical', () => (
    <div className={representClasses}>
      <CourseCard title={testData.title}
        instructor={testData.instructor}
        meta={testData.meta}
        expanded='vertical' />
    </div>
  ))

  .addWithInfo('Course Card Expanded Horizontal', () => (
    <div className={representClasses}>
      <CourseCard title={testData.title}
        instructor={testData.instructor}
        meta={testData.meta}
        expanded='horizontal' />
    </div>
  ))
  

  .addWithInfo('Lesson Card', () => (
    <div className={representClasses}>
      <LessonCard title={testData.title} instructor={testData.instructor} meta={testData.meta} />
    </div>
  ))

  .addWithInfo('Playlist Card', () => (
    <div className={representClasses}>
      <PlaylistCard title={testData.title} instructor={testData.instructor} meta={testData.meta} />
    </div>
  ))

storiesOf('Static: Cards')
  .addWithInfo('Course Card', () => (
    <div className={representClasses}>

      <div className='relative card card-stacked-shadow card-course'>
        <div className='flex flex-column items-center overflow-hidden br2 pa4 bg-white navy pointer relative z-1 card-course-inner'>
          <div className='fa fa-play w3 h3 f3 absolute z-1 gray bg-white-70 o-0 items-center justify-center br-pill pointer card-play-btn'></div>
          <div className='mw5 mt3 center ph3'>
            <img alt='' src={imgCourseCard}/>
          </div>
          <h3 className='f3 tc mt4 mb2 avenir fw5'>Introduction to RxJS Marble Testing Two lines headline</h3>
          <div className='f6 dark-gray o-50 mb4 tc'>Joe Maddalone</div>
          <div className='flex justify-between self-stretch items-center'>
            <div className='f6 dark-gray o-50'>12 lessons</div>
            <div className='f6 orange lh-title ttu fw6 ph3 pv1 br-pill bg-tag-orange tracked'>course</div>
          </div>
        </div>
      </div>

    </div>
  ))

  .addWithInfo('Course Card Expanded Vertical', () => (
    <div className={representClasses}>

      <div className='relative card card-stacked-shadow card-course'>
        <div className='flex flex-column items-center overflow-hidden br2 br--top pa4 bg-white navy pointer relative z-1 card-course-inner'>
          <div className='fa fa-play w3 h3 f3 absolute z-1 gray bg-white-70 o-0 items-center justify-center br-pill pointer card-play-btn'></div>
          <div className='mw5 mt3 center ph3'>
            <img alt='' src={imgCourseCard}/>
          </div>
          <h3 className='f3 tc mt4 mb2 avenir fw5'>Introduction to RxJS Marble Testing Two lines headline</h3>
          <div className='f6 dark-gray o-50 mb4 tc'>Joe Maddalone</div>
          <div className='flex justify-between self-stretch items-center'>
            <div className='f6 dark-gray o-50'>12 lessons</div>
            <div className='f6 orange lh-title ttu fw6 ph3 pv1 br-pill bg-tag-orange tracked'>course</div>
          </div>
        </div>
        <div className='relative w-100 z-1 overflow-hidden pv3 br2 br--bottom bg-tag-gray' style={{
          height: '290px'
        }}>
          <div className='pr3 self-stretch h-100 overflow-y-scroll'>
            <ul className='list pa0 ma0 overflow-hidden card-progress-list'>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed'>
                <img src={imgRx} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden o-60 lesson-title'>
                  <div className='truncate'>Pick Up Angular 2 in 6 Minutes Pick Up Angular 2 in 6 Minutes</div>
                  <div className='w3 ml3 tr o-60'>02:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed pre-next'>
                <img src={imgAngular} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden o-60 lesson-title'>
                  <div className='truncate'>Checking Model Validation in Angular 2</div>
                  <div className='w3 ml3 tr o-60'>22:00</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item next'>
                <img src={imgJs} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Understand the Angular States of Model Validation in Angular 2</div>
                  <div className='w3 ml3 tr o-60'>04:17</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgRx} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>31:41</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgAngular} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed'>
                <img src={imgJs} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Understand the Angular 2 States of</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgRx} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgAngular} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  ))

  .addWithInfo('Course Card Expanded Horizontal', () => (
    <div className={representClasses}>

      <div className='relative card card-stacked-shadow card-course flex expanded-horizontal'>
        <div className='flex flex-column items-center overflow-hidden br2 br--left pa4 bg-white navy pointer relative z-1 card-course-inner'>
          <div className='fa fa-play w3 h3 f3 absolute z-1 gray bg-white-70 o-0 items-center justify-center br-pill pointer card-play-btn'></div>
          <div className='mw5 mt3 center ph3'>
            <img alt='' src={imgCourseCard}/>
          </div>
          <h3 className='f3 tc mt4 mb2 avenir fw5'>Introduction to RxJS Marble Testing Two lines headline</h3>
          <div className='f6 dark-gray o-50 mb4 tc'>Joe Maddalone</div>
          <div className='flex justify-between self-stretch items-center'>
            <div className='f6 dark-gray o-50'>12 lessons</div>
            <div className='f6 orange lh-title ttu fw6 ph3 pv1 br-pill bg-tag-orange tracked'>course</div>
          </div>
        </div>
        <div className='relative w-100 z-1 overflow-hidden pv3 br2 br--right bg-tag-gray' style={{
          height: 'auto',
          maxHeight: '475px'
        }}>
          <div className='pr3 self-stretch h-100 overflow-y-scroll'>
            <ul className='list pa0 ma0 overflow-hidden card-progress-list'>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed'>
                <img src={imgRx} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden o-60 lesson-title'>
                  <div className='truncate'>Pick Up Angular 2 in 6 Minutes Pick Up Angular 2 in 6 Minutes</div>
                  <div className='w3 ml3 tr o-60'>02:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed pre-next'>
                <img src={imgAngular} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden o-60 lesson-title'>
                  <div className='truncate'>Checking Model Validation in Angular 2</div>
                  <div className='w3 ml3 tr o-60'>22:00</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item next'>
                <img src={imgJs} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Understand the Angular States of Model Validation in Angular 2</div>
                  <div className='w3 ml3 tr o-60'>04:17</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgRx} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>31:41</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgAngular} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed'>
                <img src={imgJs} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Understand the Angular 2 States of</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgRx} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgAngular} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgRx} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
              <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                <img src={imgAngular} className='ml2 mt1' alt=''/>
                <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                  <div className='truncate'>Sync Requests with RxJS and Angular</div>
                  <div className='w3 ml3 tr o-60'>22:22</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  ))

  .addWithInfo('Lesson Card', () => (
    <div className={representClasses}>

      <div className='relative card card-lesson'>
        <div className='flex flex-column items-center overflow-hidden br2 pa4 bg-white navy pointer relative z-1 card-course-inner'>
          <div className='fa fa-play w3 h3 f3 absolute z-1 gray bg-white-70 o-0 items-center justify-center br-pill pointer card-play-btn'></div>
          <h3 className='f3 tc mt4 mb2 avenir fw5'>Introduction to RxJS Marble Testing Two lines headline</h3>
          <div className='f6 dark-gray o-50 mb4 tc'>Joe Maddalone</div>
          <div className='flex justify-between self-stretch items-center'>
            <div className='flex items-center gray'>
              <img src={imgJs} className='w2' alt=''/>
              <i className='fa fa-clock-o o-60 f5 ml3'></i>
              <div className='w3 ml2 o-60 f6'>22:22</div>
            </div>
            <div className='f6 blue lh-title ttu fw6 ph3 pv1 br-pill bg-tag-blue tracked'>lesson</div>
          </div>
        </div>
      </div>

    </div>
  ))

  .addWithInfo('Playlist Card', () => (
    <div className={representClasses}>

      <div className='relative card card-stacked-shadow sans-serif card-playlist'>
        <div className='flex flex-column items-center br2 bg-white navy relative z-1 card-course-inner'>
          <div className='relative w-100 z-1 pv3 br2 br--top bg-tag-gray' style={{
            height: '290px'
          }}>
            <div className='fa fa-play w3 h3 f3 absolute z-1 gray hover-turquoise bg-white items-center justify-center br-pill pointer card-play-btn'></div>
            <div className='pr3 self-stretch h-100 overflow-y-scroll'>
              <ul className='list pa0 ma0 overflow-hidden card-progress-list'>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed'>
                  <img src={imgRx} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden o-60 lesson-title'>
                    <div className='truncate'>Pick Up Angular 2 in 6 Minutes Pick Up Angular 2 in 6 Minutes</div>
                    <div className='w3 ml3 tr o-60'>02:22</div>
                  </div>
                </li>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed pre-next'>
                  <img src={imgAngular} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden o-60 lesson-title'>
                    <div className='truncate'>Checking Model Validation in Angular 2</div>
                    <div className='w3 ml3 tr o-60'>22:00</div>
                  </div>
                </li>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item next'>
                  <img src={imgJs} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                    <div className='truncate'>Understand the Angular States of Model Validation in Angular 2</div>
                    <div className='w3 ml3 tr o-60'>04:17</div>
                  </div>
                </li>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                  <img src={imgRx} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                    <div className='truncate'>Sync Requests with RxJS and Angular</div>
                    <div className='w3 ml3 tr o-60'>31:41</div>
                  </div>
                </li>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                  <img src={imgAngular} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                    <div className='truncate'>Sync Requests with RxJS and Angular</div>
                    <div className='w3 ml3 tr o-60'>22:22</div>
                  </div>
                </li>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item viewed'>
                  <img src={imgJs} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                    <div className='truncate'>Understand the Angular 2 States of</div>
                    <div className='w3 ml3 tr o-60'>22:22</div>
                  </div>
                </li>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                  <img src={imgRx} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                    <div className='truncate'>Sync Requests with RxJS and Angular</div>
                    <div className='w3 ml3 tr o-60'>22:22</div>
                  </div>
                </li>
                <li className='flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item'>
                  <img src={imgAngular} className='ml2 mt1' alt=''/>
                  <div className='ml2 flex flex-grow-1 lh-copy overflow-hidden lesson-title'>
                    <div className='truncate'>Sync Requests with RxJS and Angular</div>
                    <div className='w3 ml3 tr o-60'>22:22</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='ph4 pt5 pb4'>
            <div className='tc f6 lh-title light-gray'>14:34 to go (4 more lessons)</div>
            <h3 className='f3 tc mt3 mb2 fw5 lh-copy'>Introduction to RxJS Marble Testing Two lines headline</h3>
            <div className='f6 dark-gray o-50 mb4 tc'>Joe Maddalone</div>
            <div className='flex justify-between self-stretch items-center'>
              <div className='flex flex-column items-center'>
                <div className='f6 dark-gray o-50'>
                  <span className='dark-green'>7</span>
                  <span className='mh1'>/</span>
                  <span>12 lessons</span>
                </div>
                <div className='w4 br1 bg-tag-turquoise mt1 overflow-hidden'>
                  <div className='pt1 bg-turquoise' style={{
                    width: '58%'
                  }}></div>
                </div>
              </div>
              <div className='f6 dark-green lh-title ttu fw6 ph3 pv1 br-pill bg-tag-turquoise tracked'>playlist</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  ))
