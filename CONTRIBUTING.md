# Contributing

## Dependencies

- Git
- Node
- Yarn

## Folders and files

- `src/` contains the source code
  - `src/components/{ComponentName}` contains the API of components
    - `index.js` defines and exports the component
    - `index.examples.js` defines examples to be rendered in the **app**
      - `.addWithInfo` adds component documentation
      - `.addWithPropsCombinations` renders the component with all possible prop combinations
- `src/index.js` exports modules for npm
- `lib` is the folder that is generated for the **package**
- `build` is the folder that is generated for the **app**

## Workflow

- Ensure you have Git, Node, and Yarn installed
- Clone this repo and `cd` into it
- Create a feature branch off of `master`
- `yarn` to install latest dependencies
- `yarn dev:package` to develop the **package**
- `yarn dev:app` to develop the **app**
- `yarn verify` check linting and builds work
- Use [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) to test using the **package** in another project
- [localhost:2000](http://localhost:2000) to view the **app**
- Stage, commit, and push
- If you want to publish a new **package** release, run `yarn bump` and type in the new version using [Semantic Versioning](http://semver.org/); this will bump the `package.json` version and push a new git tag
- Submit a pull request for the feature branch to `master`
- Once PR status passes (approved review and successful [continuous integration in Travis CI](https://travis-ci.org/eggheadio/egghead-ui), merge the pull request
- When `master` is updated
  - [Continuous deployment runs in Travis CI](https://travis-ci.org/eggheadio/egghead-ui) and deploys the latest **app** to [styleguide.egghead.io](https://styleguide.egghead.io) 
  - If there was a version bump (`package.json` version and new git tag), it also publishes the new **package** version to [npm](https://www.npmjs.com/package/egghead-ui)
    - Notify consuming projects to run `yarn upgrade egghead-ui` in their projects to get latest, with a list of changes

### PR example

You can [view a PR example of the workflow](https://github.com/eggheadio/egghead-ui/pull/80#pullrequestreview-28500402)

### Video example

You can [watch a video example of the workflow](https://youtu.be/y8604EFI8P4); specifically with promoting a component from another project into `egghead-ui`.

[![Video example](http://img.youtube.com/vi/y8604EFI8P4/0.jpg)](https://youtu.be/y8604EFI8P4)

## Conventions

### Package management

Yarn is used for package management. Use the [yarn cli](https://yarnpkg.com/en/docs/usage) to add/remove/update packages which updates both the `package.json` and `yarn.lock` to ensure consistent package installs. 

### Scripts

Yarn is used for running scripts. Use `yarn {script}` to run them. The core of the scripts extend `react-scripts` (from Create React App) so that this project doesn't have to manage compiling, linting, or testing; it generally gets all [Create React App updates](https://github.com/facebookincubator/create-react-app/releases) for free by running `yarn upgrade react-scripts`. Avoid ejecting the project for this reason if at all possible.

### Components

Each directory inside `src` is a **component**. A component is a directory organized _by feature_. They look like this:

```
SomeComponentName/
  index.js (entry point)
  components/ (optional sub-components)
  utils/ (optional utility modules)
```

### Screens

Some components are also **screens**. A screen is a collection of components that form a "page"; it is generally a collection of `Card`s. They look like this:

```
SomeScreenName/
  index.js (entry point)
  screens/ (optional sub-screens paired with sub-routes)
  components/ (optional sub-components)
  utils/ (optional utility modules)
```

### Paths

ES2015 modules are used for sharing code between files. `NODE_PATH` is set to `src` so `import Icon from 'components/Icon'` will grab `src/components/Icon`. When trying to decide if an import should use an absolute or relative path, it depends on the situation: if something belongs to an inner module/component, it should reference the pieces relatively; if something is using a general promoted module/component, it should import the pieces absolutely. A good rule of thumb is to keep everything relative that would be moved together so it is self-contained.

### Promotion

All resources are eligible for **promotion** to facilitate code reuse. If a resource is shared by multiple files the principle of [lowest common ancestor](https://en.wikipedia.org/wiki/Lowest_common_ancestor) applies and that shared resource is _promoted_ to the lowest common ancestor’s directory.

### JavaScript

Latest JS syntax is used where it makes sense. [Lodash](lodash.com) methods are often used in place of native methods for performance, convenience, and consistency.

### Styles

The root egghead-ui components are used wherever possible. Styling is largely taken care of by these components. When app specific styles are needed beyond that, `tachyons-egghead` classes are used where possible. Styles are added to work on mobile first; the tachyons `*-ns` (not small) and `*-l` (large only) classes are appended to override/extend styles for large screen sizes. When more customization is needed, `styled-components` is used.

### Linting

Linting is currently provided by `react-scripts` (ESLint).

### Testing

Testing is currently provided by `react-scripts` (Jest). Files that could benefit from tests have an `index.test.js` file next to them. These are generally simple unit or snapshot tests where they provide value.

## Known Issues

- `devDependencies` don't install on heroku. All deps need to be in the `dependencies` object.
- Using a CSS package from npm with `yarn link` doesn't work with React Storybook (such as `tachyons-egghead`); it has to be installed from npm.
- The **app** is built with `NODE_ENV=development` to preserve PropTypes for the `react-storybook-addon-info` fork in use (so that we get full prop tables including `arrayOf`, `oneOf`, `shape` etc.)
