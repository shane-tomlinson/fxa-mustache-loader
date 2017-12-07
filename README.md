# fxa-mustache-loader

Webpack Mustache template loader that works with CSP.

## Installation

```bash
npm i --save-dev fxa-mustache-loader
```

## Webpack usage

In your Webpack configuration file, add a module.rule:

```js
module: {
  rules: [
    {
      test: /\.mustache$/,
      loader: 'fxa-mustache-loader'
    }
  ]
},
```

## Contact info
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* @shane_tomlinson

## LICENCE

MPL-2.0