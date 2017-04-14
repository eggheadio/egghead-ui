import {keys} from 'lodash'

export const detailsByLessonState = {
  proposed: {
    action: 'Propose',
    description: 'This lesson is proposed and is waiting for review to be accepted.',
    color: 'blue',
    icon: 'add',
  },
  cancelled: {
    action: 'Cancel',
    description: 'This lesson has been cancelled.',
    color: 'red',
    icon: 'cancel',
  },
  accepted: {
    action: 'Accept',
    description: 'This lesson has been accepted - it can be claimed.',
    color: 'green',
    icon: 'check',
  },
  requested: {
    action: 'Request',
    description: 'This lesson has been requested - it can be claimed.',
    color: 'dark-gray',
    icon: 'check',
  },
  claimed: {
    action: 'Claim',
    description: 'This lesson is claimed. Now it needs a video to be added and lesson details filled out.',
    color: 'green',
    icon: 'check',
  },
  submitted: {
    action: 'Submit',
    description: 'Sweet! This lesson has been submitted and is waiting for review to be approved.',
    color: 'green',
    icon: 'check',
  },
  rejected: {
    action: 'Ask for Changes',
    description: 'Changes have been requested for this lesson. Please update the lesson as requested.',
    title:'Changes Needed',
    color: 'orange',
    icon: 'cancel',
  },
  updated: {
    action: 'Apply Update',
    description: 'Lesson updated! Waiting for review to be approved.',
    color: 'green',
    icon: 'refresh',
  },
  approved: {
    action: 'Approved',
    description: 'This lesson has been approved.',
    color: 'green',
    icon: 'check',
  },
  published: {
    action: 'Publish',
    description: `This lesson has been published. It is available publicly for students to view on egghead.io.`,
    color: 'green',
    icon: 'check',
  },
  flagged: {
    action: 'Flag',
    description: `This lesson has been flagged - it needs to be revised or it will need to be retired.`,
    color: 'orange',
    icon: 'warning',
  },
  revised: {
    action: 'Revise',
    description: `This lesson has revised and is no longer flagged.`,
    color: 'green',
    icon: 'refresh',
  },
  retired: {
    action: 'Retire',
    description: `This lesson has been retired.`,
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
