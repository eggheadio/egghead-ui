import React from 'react'
import {storiesOf} from '@kadira/storybook'
import CourseCard from './CourseCard'
import LessonCard from './LessonCard'
import PlaylistCard from './PlaylistCard'
import sampleData from './courseJSON'
import lessonResponse from './lessonJSON'

const representClasses = 'flex justify-center items-center bg-dark-navy pv5'

storiesOf('Cards')
  .addWithInfo('Course Card', () => (
    <div className={representClasses}>
      <CourseCard course={sampleData} />
    </div>
  ))

  .addWithInfo('Course Card Expanded Vertical', () => (
    <div className={representClasses}>
      <CourseCard type={'course'} course={sampleData} expanded={'vertical'} />
    </div>
  ))

  .addWithInfo('Course Card Expanded Horizontal', () => (
    <div className={representClasses}>
      <CourseCard type={'course'} course={sampleData} expanded={'horizontal'} />
    </div>
  ))

  .addWithInfo('Lesson Card', () => (
    <div className={representClasses}>
      <LessonCard type={'lesson'} lesson={lessonResponse} />
    </div>
  ))

  .addWithInfo('Playlist Card', () => (
    <div className={representClasses}>
      <PlaylistCard type={'playlist'} playlist={sampleData} />
    </div>
  ))

