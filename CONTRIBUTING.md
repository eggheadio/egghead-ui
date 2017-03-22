# Contributing

This `egghead-ui` repo does two things:
- Generates the living style guide app with documentation, published on [styleguide.egghead.io](https://styleguide.egghead.io); this is currently done using [react-storybook](https://getstorybook.io/)
- Builds the component library, [pubished on npm](https://www.npmjs.com/package/egghead-ui)

## Dependencies

- Git
- Node
- Yarn

## Folders and files

- `src/index.js` imports all `src/components` and exports the component library for npm.
- `src/components` contains the API of usable components
  - `src/components/{ComponentName}`
    - `index.js` defines and exports the component.
      - Styling is done using classes from [tachyons-egghead](https://github.com/eggheadio/tachyons-egghead) wherever possible. Otherwise, [styled-components](https://styled-components.com/) is used.
      - The `*-ns` (not small) Tachyons classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.
    - `index.examples.js` adds the component to the style guide.
      - `.addWithInfo` adds documentation
      - `.addWithPropsCombinations` renders components with all possible prop combinations and complains if you are missing any
- `src/utils` contains utility modules and components which are not exported publicly but are used in multiple `src/components`
- `build` is the folder that is generated for the style guide app and published to [styleguide.egghead.io](https://styleguide.egghead.io)
- `lib` is the folder that is generated for the component library and published to [npm](https://www.npmjs.com/package/egghead-ui)

## Workflow

- create a feature branch off of `master`
- `yarn` to install latest packages
- `yarn dev:styleguide` to develop using the style guide
- `yarn dev:library` to develop the library
- `yarn verify` check linting and builds work
- [localhost:2000](http://localhost:2000) to view the style guide
- use [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) to test using library components in another project
- stage, commit, and push
- if you want to publish a new library release, run `yarn bump` and type in the new version using [Semantic Versioning](http://semver.org/); this will bump the `package.json` version and push a new git tag
- submit a pull request for the feature branch to `master`
- once PR status passes (approved review and successful [continuous integration in Travis CI](https://travis-ci.org/eggheadio/egghead-ui), merge the pull request
- when `master` is updated
  - [continuous deployment runs in Travis CI](https://travis-ci.org/eggheadio/egghead-ui) and deploys the latest style guide app to [styleguide.egghead.io](https://styleguide.egghead.io) 
  - if there was a version bump (`package.json` version and new git tag), it also publishes the new library version to [npm](https://www.npmjs.com/package/egghead-ui)
    - notify consuming projects to run `yarn add egghead-ui@latest` in their projects to get latest, with a list of changes

### PR example

You can [view a PR example of the workflow](https://github.com/eggheadio/egghead-ui/pull/80#pullrequestreview-28500402)

### Video example

You can [watch a video example of the workflow](https://youtu.be/y8604EFI8P4); specifically with promoting a component from another project into `egghead-ui`.

[![Video example](http://img.youtube.com/vi/y8604EFI8P4/0.jpg)](https://youtu.be/y8604EFI8P4)

## Known Issues

- `devDependencies` don't install on heroku. All deps need to be in the `dependencies` object.
- Using a CSS module with `yarn link` doesn't work with React Storybook (such as `tachyons-egghead`); it has to be installed from npm.
- The styleguide is built with `NODE_ENV=development` to preserve PropTypes for the `react-storybook-addon-info` fork in use (so that we get full prop tables including `arrayOf`, `oneOf`, `shape` etc.)
