import 'tachyons-egghead'
import {configure, setAddon} from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon)

const req = require.context('../src/components/', true, /.examples.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
