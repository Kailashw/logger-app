# @kailashw/logger-app
This library is used to log the messages to server/browser console. The library currently prints the data to the console. I will be working on making it more effective. For now, This is a test library published on npm library. The details about usage of this library are as following.


To install the library in your application

```
npm i @kailashw/logger-app
```

Sample usage in the code,

### for ES5 and before

```
const Log = require("@kailashw/logger-app/Log")
Log.info({msg:'this is message', data:'this is data'})
```

### ES6 onwards
```
import Log from "@kailashw/logger-app"
Log.info({msg:'this is message', data:'this is data'})
```

