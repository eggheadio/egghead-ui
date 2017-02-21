# egghead-ui

This repo has two purposes:
- A living style guide app with documentation, published on [styleguide.egghead.io](https://styleguide.egghead.io)
- A component library, [pubished on npm](https://www.npmjs.com/package/egghead-ui)

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

- create feature branch off of master
- `yarn` to install latest packages
- `yarn dev:styleguide` to develop using the style guide
- `yarn dev:library` to develop the library
- [localhost:2000](http://localhost:2000) to view the style guide
- use [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) to test using library components in another project
- submit a pull request for feature branch to master
- once [continuous integration passes](https://app.codeship.com/projects/200238/configure_tests) and there is an approved review, merge the pull request
- [continuous deployment runs in Codeship](https://app.codeship.com/projects/200238/deployment_branches/162272) and deploys the latest style guide app to [styleguide.egghead.io](https://styleguide.egghead.io) and then updates the library to a new version and publishes it [on npm](https://www.npmjs.com/package/egghead-ui)
- notify consumers to run `yarn add egghead-ui@latest` in their projects to get latest, with a list of changes

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
