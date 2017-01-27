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

- `yarn` to install latest packages.
- `yarn dev` to develop using the style guide.
- [localhost:2000](http://localhost:2000) to view the style guide.
- Submit pull requests:
  - Continuous integration runs in Codeship to ensure builds succeed
  - Pull request is merged into master
  - Continuous deployment runs in Codeship
    - Deploys the latest style guide app on [styleguide.egghead.io](https://styleguide.egghead.io).
    - Publishes the latest component library version [on npm](https://www.npmjs.com/package/egghead-ui).

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
