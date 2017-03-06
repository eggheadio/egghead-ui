import 'tachyons-egghead'
import {configure, setAddon} from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info';
import withPropsCombinations, {setDefaults} from 'react-storybook-addon-props-combinations'

setAddon(infoAddon)
setAddon(withPropsCombinations)
setDefaults({
  showSource: false,
  mustProvideAllProps: true,
})

const req = require.context('../src/components/', true, /.examples.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
