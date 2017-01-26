import imgCourseCard from './assets/temp/img-course-card.png'
import imgJs from './assets/temp/js.svg'
import imgRx from './assets/temp/rx.svg'

const testData = {
  title: 'Introduction to RxJS Marble Testing Two lines headline',
  instructor: 'Joe Maddalone',
  meta: {
    courseImg: imgCourseCard,
    langImg: imgJs,
    lessonCount: 12,
    currentLesson: 7,
    lessonsLeft: 5,
    timeRemaining: '14:34',
    videoLength: '22:22',
    playlist: [
      {
        watched: true,
        current: false,
        icon: imgRx,
        title: 'First Video',
        length: '01:11'
      },
      {
        watched: true,
        current: false,
        icon: imgJs,
        title: 'Second Video',
        length: '02:22'
      },
      {
        watched: false,
        current: true,
        icon: imgRx,
        title: 'Third Video',
        length: '03:33'
      },
      {
        watched: false,
        current: false,
        icon: imgJs,
        title: 'Fourth Video',
        length: '04:44'
      },
      {
        watched: false,
        current: false,
        icon: imgRx,
        title: 'Fifth Video',
        length: '05:55'
      },
      {
        watched: false,
        current: false,
        icon: imgJs,
        title: 'Sixth Video',
        length: '06:06'
      },
      {
        watched: false,
        current: false,
        icon: imgRx,
        title: 'Seventh Video',
        length: '07:07'
      },
    ]
    
  }
}

export default testData
