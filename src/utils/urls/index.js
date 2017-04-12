export const getLoginUrl = () => (
  `${process.env.REACT_APP_EGGHEAD_BASE_URL}/users/jwt?return_to=${window.location.href}`
)

export const guideUrl = 'https://instructor.egghead.io/guide'

export const chatUrl = 'https://eggheadio.slack.com/messages/egghead-instructors/'
export const instructorsChatUrl = 'https://eggheadio.slack.com/messages/egghead-instructors/'

export const chatInfoUrl = 'https://instructor.egghead.io/guide/01-invited/invited.html'
export const roughDraftInfoUrl = 'https://instructor.egghead.io/guide/01-invited/first-lesson.html'
export const gearSetupInfoUrl = 'https://instructor.egghead.io/guide/02-creating-lessons/recording-gear.html'

export const publicLessonsUrl = 'https://egghead.io/lessons'
