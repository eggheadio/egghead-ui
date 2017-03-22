import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {apiFixture} from '../../utils/fixtures'
import Loading from '.'

storiesOf('Loading')
    .addWithInfo(
        'Info',
        'Used to indicate a loading state',
        () => (
            <Loading/>
        ),
    )
