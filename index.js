"use strict";

var GlobCollection = require("buildkit-globber").GlobCollection;
var Tree = require("buildkit-globber").Tree;
var fs = require("fs");
var path = require("path");

var pluginsList = {};

class Plugins {

	constructor() {
		this.list = pluginsList
	}

	load(pluginPath, pluginConfigGlob, each) {

		var globs = new GlobCollection([pluginConfigGlob]);
		var tree = new Tree(".", pluginPath);

		var pluginPathObjects = tree.mapGlobs(globs).files;
		
		for (var i = 0, l = pluginPathObjects.length; i < l; i++) {
			var pluginPathObject = pluginPathObjects[i];
			var pluginJSON = JSON.parse(fs.readFileSync(pluginPathObject.location));
			var indexPath = path.posix.join(pluginPathObject.dirname, pluginJSON.pluginMain);
			var pluginCode = require( indexPath );

			if (each) {
				pluginsList[pluginJSON.pluginName] = each(pluginCode, pluginJSON, pluginsList);
		}

		}
		
	}

}

module.exports = new Plugins();