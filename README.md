#buildkit-plugins
Buildkit plugin loading library

## What Does It Do?
Loads a set of plugins in nodejs and provides a callback function for each plugin

## Preparation
1. Install buildkit-plugins
`
npm install --save buildkit-plugins
`
2. Require
`
var plugins = require("buildkit-plugins");
`
4. Create a plugin folder
`
./plugins
`
5. Add a plugins with a config json and main js file
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

module.exports = Test;
```

## Plugins
```

plugins.load("./plugins", "*/config.json", function(pluginCode, pluginJSON, pluginList) {
	
	//do something with the returned plugins

});


```
