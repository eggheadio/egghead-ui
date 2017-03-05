import React from 'react'
import {keys} from 'lodash'
import {storiesOf} from '@kadira/storybook'
import Icon, {sizes, types, colors} from './index'

storiesOf('Icons')
  .addWithInfo('Success', () => (
    <Icon type='success' />
  ))

  .addWithInfo('Cancel', () => (
    <Icon type='cancel' />
  ))

  .addWithInfo('Add', () => (
    <Icon type='add' />
  ))

  .addWithInfo('Warning', () => (
    <Icon type='warning' />
  ))

  .addWithInfo('Remove', () => (
    <Icon type='remove' />
  ))

  .addWithInfo('Question', () => (
    <Icon type='question' />
  ))

  .addWithInfo('Menu', () => (
    <Icon type='menu' />
  ))

  .addWithInfo('Box', () => (
    <Icon type='box' />
  ))

  .addWithInfo('Box (Checked)', () => (
    <Icon type='box-check' />
  ))

  .addWithInfo('Check', () => (
    <Icon type='check' />
  ))

  .addWithInfo('Close', () => (
    <Icon type='close' />
  ))

  .addWithInfo('Info', () => (
    <Icon type='info' />
  ))

  .addWithInfo('Clock', () => (
    <Icon type='clock' />
  ))

  .addWithInfo('Dollar', () => (
    <Icon type='dollar' />
  ))

  .addWithInfo('Course', () => (
    <Icon type='course' />
  ))

  .addWithInfo('Lesson', () => (
    <Icon type='lesson' />
  ))

  .addWithInfo('Refresh', () => (
    <Icon
      type='refresh'
      spin
    />
  ))

  .addWithInfo('Play', () => (
    <Icon
      type='play'
    />
  ))

  .addWithPropsCombinations('Size & Color Combinations', Icon, {
    size: keys(sizes),
    type: keys(types),
    color: keys(colors)
  })
