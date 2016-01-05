#buildkit-plugins
Buildkit plugin loading library

## What Does It Do?
Loads a set of plugins in nodejs and provides a callback function for each plugin

## Use
1. Install buildkit-plugins
```
npm install --save buildkit-plugins
```
2. Require
```
var plugins = require("buildkit-plugins");

```
4. Create a plugin folder
```
./plugins
```
5. Add a plugins with a config json file including the attributes below
```
// ./plugins/test/config.json
{
	"pluginName": "test"
	"pluginMain": "js/index.js"
}
```
```
// ./plugins/test/js/index.js
'use strict';

class Test {
	
}

module.exports = new Test();
```
6. Use API
See below.


## Plugins
```

Plugins.load("./plugins", "*/config.json", function(plugin, plugins) {
	
	//do something with the returned plugins

});


```