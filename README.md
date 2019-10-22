# Orion Monorepo

![npm](https://img.shields.io/npm/v/@inloco/orion?color=green&label=%40inloco%2Forion)
![npm](https://img.shields.io/npm/v/@inloco/atomic-bomb?color=green&label=%40inloco%2Fatomic-bomb)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=inloco/orion)](https://dependabot.com)

In Loco's monorepo for [Orion](https://github.com/inloco/orion/tree/master/packages/orion) and [Atomic Bomb](https://github.com/inloco/orion/tree/master/packages/atomic-bomb).

Please refer to their own README files for more info.

## Contributing

Since we are using `yarn workspaces`, `yarn` is required.

### Setup

To setup the project, you just need to have [Yarn](https://yarnpkg.com/en/) installed and run it to install the project's dependencies:

```sh
  yarn
```

Then run the command below to update build atomic-bomb:

```sh
  yarn atomic-bomb:build
```

### Watch (Hot reloading)

To update css on file change:

```sh
  yarn orion:watch
```

### Lint

We're using [ESLint-Config-React-App](https://www.npmjs.com/package/eslint-config-react-app) to easily lint the source files.

Run it with:

```sh
  yarn run orion:lint
```

In order to update eslint configurations please refer to the package.
In order to extend and add more rules edit `.eslintrc.json` file.

### Storybook

We're using [Storybook](https://storybook.js.org/), to easily see and test the components.

Run it with:

```sh
  yarn orion:storybook
```

Then open it at the url indicated on the terminal, probably: `http://localhost:9001/`.

## Release

To release, follow these steps:

1. Run `yarn release` (yes, it's **release**, not **publish**!) or `lerna publish` (in this case you'll need a globally installed Lerna).
2. Select the versions you wish to publish for each modified package.
3. You're done!

### Deploying Storybook

After releasing a new version, our gh page with Storybook is automatically deployed.

In case it's necessary to do this manually though, just run this simple yarn script:

```sh
yarn orion:deploy:storybook
```
