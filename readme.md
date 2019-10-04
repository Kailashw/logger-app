# @kailashw/logger-app
This library is used to log the messages to server/browser console. The library currently prints the data to the console. I will be working on making it more effective. For now, This is a test library published on npm library. The details about usage of this library are as following.


To install the library in your application

### Using npm
```
npm i @kailashw/logger-app
```
### Using yarn
```
yarn add @kailashw/logger-app
```

Sample usage in the code,

### For ES5 and before

```
const logger = require("@kailashw/logger-app")
logger.info({msg:'this is message', data:'this is data'})
```

### ES6 onwards
```
import logger from "@kailashw/logger-app";
logger.info({msg:'this is message', data:'this is data'})
```

