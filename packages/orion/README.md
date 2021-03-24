# Orion

In Loco's component library, based on React Semantic UI.

You can see and interact with the components [here](https://inloco.github.io/orion).

## Usage

1. Install via NPM or Yarn:

```sh
  npm install --save @incognia/orion
  #or
  yarn add @incognia/orion
```

2. Add Material Icons Font to your HTML:

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

3. Import Orion's CSS on your react app:

```js
import '@incognia/orion/dist/orion.css'
```

4. Import and use Orion's components as needed:

```js
import { Button, Dropdown } from '@incognia/orion'
```

### Testing

Apps using Orion will have failing Jest tests due to canvas usage, which is not supported by default.
To fix this, just include the `jest-canvas-mock` dev dependency and follow its
[setup instructions](https://www.npmjs.com/package/jest-canvas-mock#setup).

## Contributing

Since Orion is part of a monorepo, follow [Monorepo README](https://github.com/inloco/orion) for instructions.
