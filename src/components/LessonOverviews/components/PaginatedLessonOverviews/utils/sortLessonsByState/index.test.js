import sortLessonsByState from '.'

test('sorts lessons by the lesson state flow order', () => (
  expect(sortLessonsByState([
    {state: 'claimed'},
    {state: 'published'},
    {state: 'retired'},
    {state: 'published'},
    {state: 'published'},
    {state: 'accepted'},
    {state: 'approved'},
    {state: 'published'},
  ])).toEqual([
    {state: 'accepted'},
    {state: 'claimed'},
    {state: 'approved'},
    {state: 'published'},
    {state: 'published'},
    {state: 'published'},
    {state: 'published'},
    {state: 'retired'},
  ])
))
