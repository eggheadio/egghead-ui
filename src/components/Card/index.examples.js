import React from 'react'
import {storiesOf} from '@kadira/storybook'
import CourseCard from './CourseCard'
import LessonCard from './LessonCard'
import PlaylistCard from './PlaylistCard'
import StyledCard from './StyledCard'
import imgCourseCard from './assets/temp/img-course-card.png'
import imgRx from './assets/temp/rx.svg'
import imgAngular from './assets/temp/angular.svg'
import imgJs from './assets/temp/js.svg'
import sampleData from './courseJSON'
import lessonResponse from './lessonJSON'

const representClasses = 'flex justify-center items-center bg-dark-navy pv5'

storiesOf('Cards')
  .addWithInfo('Course Card', () => (
    <div className={representClasses}>
      <CourseCard response={sampleData} />
    </div>
  ))

  .addWithInfo('Course Card Expanded Vertical', () => (
    <div className={representClasses}>
      <CourseCard response={sampleData} expanded='vertical' />
    </div>
  ))

  .addWithInfo('Course Card Expanded Horizontal', () => (
    <div className={representClasses}>
      <CourseCard response={sampleData} expanded='horizontal' />
    </div>
  ))
  

  .addWithInfo('Lesson Card', () => (
    <div className={representClasses}>
      <LessonCard lesson={lessonResponse} />
    </div>
  ))

  .addWithInfo('Playlist Card', () => (
    <div className={representClasses}>
      <PlaylistCard playlist={sampleData} />
    </div>
  ))

  .addWithInfo('Styled Course Card', () => (
    <div className={representClasses}>
      <CourseCard response={sampleData} />
    </div>
  ))

  .addWithInfo('Styled Course Card Expanded Vertical', () => (
    <div className={representClasses}>
      <StyledCard type={'course'} response={sampleData} expanded={'vertical'} />
    </div>
  ))

  .addWithInfo('Styled Course Card Expanded Horizontal', () => (
    <div className={representClasses}>
      <StyledCard type={'course'} response={sampleData} expanded={'horizontal'} />
    </div>
  ))

  .addWithInfo('Styled Lesson Card', () => (
    <div className={representClasses}>
      <LessonCard type={'lesson'} lesson={lessonResponse} />
    </div>
  ))

  .addWithInfo('Styled Playlist Card', () => (
    <div className={representClasses}>
      <PlaylistCard type={'playlist'} playlist={sampleData} />
    </div>
  ))

