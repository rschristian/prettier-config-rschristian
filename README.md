# prettier-config-rschristian

My personal Prettier config.

## Install

```
$ yarn add prettier prettier-config-rschristian
```

## Usage

In your `package.json` file:

```json
{
  "name": "example-application",
  "version": "1.0.0",
  "prettier": "prettier-config-rschristian"
}
```

Or if you want to extend it, add the following in your `.prettierrc.js` file:

```js
module.exports = {
  ..require("prettier-config-rschristian"),
  singleQuote: true,
};
```

## License

MIT © Ryan Christian
