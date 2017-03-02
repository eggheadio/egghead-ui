import React from 'react'

export const stringFixture = 'A string'

export const markdownFixture = 'This is **strong**. This is _italic_. This is [a link](https://egghead.io). This is `some code`.'

export const nameFixture = 'Jane'

export const urlFixture = 'https://google.com'

export const avatarImageUrlFixture = 'http://placehold.it/150x150?text=A+image'

export const apiFixture = 'http://jsonplaceholder.typicode.com/comments'

export const ComponentFixture = () => (
  <div>
    A component
  </div>
)

export const clickHandlerFixture = () => {
  alert('click handler called')
}
