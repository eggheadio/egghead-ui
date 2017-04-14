import isStepComplete from '.'

test('all steps are incomplete when instructor has no lessons', () => {
  const instructorLessonStates = []
  expect(isStepComplete(instructorLessonStates, 'submitted')).toBe(false)
  expect(isStepComplete(instructorLessonStates, 'approved')).toBe(false)
})

test('all steps are complete when instructor has at least one published lesson', () => {
  const instructorLessonStates = [
    'submitted',
    'approved',
    'published',
  ]
  expect(isStepComplete(instructorLessonStates, 'submitted')).toBe(true)
  expect(isStepComplete(instructorLessonStates, 'updated')).toBe(true)
  expect(isStepComplete(instructorLessonStates, 'approved')).toBe(true)
  expect(isStepComplete(instructorLessonStates, 'published')).toBe(true)
})

test('steps that are less than or equal to a completed step are also complete', () => {
  const instructorLessonStates = [
    'approved',
  ]
  expect(isStepComplete(instructorLessonStates, 'submitted')).toBe(true)
  expect(isStepComplete(instructorLessonStates, 'approved')).toBe(true)
  expect(isStepComplete(instructorLessonStates, 'published')).toBe(false)
})
