# egghead-ui

This repo has two purposes:
- A component library, [pubished on npm](https://www.npmjs.com/package/egghead-ui)
- A living style guide app with documentation, published on [styleguide.egghead.io](https://styleguide.egghead.io)

---

# Usage

```
$ yarn add 'egghead-ui'`
```

```
import {ComponentName} from 'egghead-ui'
```

View [the style guide](https://styleguide.egghead.io) for visual examples and component documentation.

---

# Development

## Dependencies

- Git
- Node
- Yarn

## Workflow

- checkout and pull latest from master
- create feature branch and check it out
- `yarn` to install latest packages
- `yarn dev:styleguide` to develop using the style guide
- `yarn dev:library` to develop the library [with yarn link](https://yarnpkg.com/en/docs/cli/link)
- [localhost:2000](http://localhost:2000) to view the style guide
- use [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) to test consuming components in another project
- submit a pull request for your feature branch
- continuous integration runs in Codeship to ensure builds succeed
- once continuous integration passes and you have an approved review, merge the pull request into master
- continuous deployment runs in Codeship and deploys the latest style guide app to [styleguide.egghead.io](https://styleguide.egghead.io)
- checkout `release` and pull latest from master
- run `yarn release` which will ask you some questions to bump the verison and publish the latest library [on npm](https://www.npmjs.com/package/egghead-ui)
- merge release into master
- Notify consumers to run `yarn upgrade egghead-ui` in their projects to get latest, with a list of changes

## Folders and files

- `src/components/ComponentName`:
  - `index.js` defines and exports a component.
    - Styling is done using classes from [tachyons-egghead](https://github.com/eggheadio/tachyons-egghead) wherever possible. Otherwise, inline style objects are used.
    - The `*-ns` (not small) Tachyons classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.
  - `index.examples.js` adds component to the style guide.
    - `.addWithInfo` adds automatic API documentation.
    - `.addWithPropCombinations` adds automatic prop combinations.
- `src/index.js` imports all `src/components` and exports the component library for npm.
- `build` is the folder that is generated for the style guide app
- `lib` is the folder that is generated for the component library

## Known Issues

- `devDependencies` don't install on heroku. All deps need to be in the `dependencies` object.
