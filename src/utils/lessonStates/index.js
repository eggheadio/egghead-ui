import {keys} from 'lodash'
import localizationBundle from '../localizationBundle'

export const detailsByLessonState = {
  proposed: {
    action: localizationBundle.lessonStates.proposed.action,
    description: localizationBundle.lessonStates.proposed.description,
    color: 'blue',
    icon: 'add',
  },
  cancelled: {
    action: localizationBundle.lessonStates.cancelled.action,
    description: localizationBundle.lessonStates.cancelled.description,
    color: 'red',
    icon: 'cancel',
  },
  accepted: {
    action: localizationBundle.lessonStates.accepted.action,
    description: localizationBundle.lessonStates.accepted.description,
    color: 'green',
    icon: 'check',
  },
  requested: {
    action: localizationBundle.lessonStates.requested.action,
    description: localizationBundle.lessonStates.requested.description,
    color: 'dark-gray',
    icon: 'check',
  },
  claimed: {
    action: localizationBundle.lessonStates.claimed.action,
    description: localizationBundle.lessonStates.claimed.description,
    color: 'green',
    icon: 'check',
  },
  submitted: {
    action: localizationBundle.lessonStates.submitted.action,
    description: localizationBundle.lessonStates.submitted.description,
    color: 'green',
    icon: 'check',
  },
  rejected: {
    action: localizationBundle.lessonStates.rejected.action,
    description: localizationBundle.lessonStates.rejected.description,
    title: localizationBundle.lessonStates.rejected.title,
    color: 'orange',
    icon: 'cancel',
  },
  updated: {
    action: localizationBundle.lessonStates.updated.action,
    description: localizationBundle.lessonStates.updated.description,
    color: 'green',
    icon: 'refresh',
  },
  approved: {
    action: localizationBundle.lessonStates.approved.action,
    description: localizationBundle.lessonStates.approved.description,
    color: 'green',
    icon: 'check',
  },
  published: {
    action: localizationBundle.lessonStates.published.action,
    description: localizationBundle.lessonStates.published.description,
    color: 'green',
    icon: 'check',
  },
  flagged: {
    action: localizationBundle.lessonStates.flagged.action,
    description: localizationBundle.lessonStates.flagged.description,
    color: 'orange',
    icon: 'warning',
  },
  revised: {
    action: localizationBundle.lessonStates.revised.action,
    description: localizationBundle.lessonStates.revised.description,
    color: 'green',
    icon: 'refresh',
  },
  retired: {
    action: localizationBundle.lessonStates.retired.action,
    description: localizationBundle.lessonStates.retired.description,
    color: 'orange',
    icon: 'cancel',
  },
}

export const lessonStates = keys(detailsByLessonState)

export const lessonStateVerbToPastTense = {
  propose: 'proposed',
  cancel: 'cancelled',
  accept: 'accepted',
  request: 'requested',
  claim: 'claimed',
  submit: 'submitted',
  reject: 'rejected',
  apply_update: 'updated',
  approve: 'approved',
  publish: 'published',
  flag: 'flagged',
  revise: 'revised',
  retire: 'retired',
}
