# babel-plugin-transform-class-private-properties



## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-transform-class-private-properties
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-class-private-properties"]
}
```

### Via CLI

```sh
$ babel --plugins transform-class-private-properties script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-class-private-properties"]
});
```
