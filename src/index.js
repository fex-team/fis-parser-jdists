var path = require('path');
var fs = require('fs');

module.exports = function(content, file, conf) {
  'use strict';
  var removeList = conf["remove-region"] || [ 'debug' ];

  function removeRegion(all, region) {
    if (removeList.indexOf(region) >= 0) {
      return '';
    }
    return all;
  }

  function includeFile(all, filename) {
    var f = path.resolve(file.dirname, filename);
    if (fs.existsSync(f)) {
      return fs.readFileSync(f);
    } else {
      return '';
    }
  }

  return content.replace(
    /function\s*\(\s*\)\s*\{\s*\/\*\!([\s\S]*?)\*\/\s*\}/g, // 处理函数注释字符串
    function(all, text) {
      return JSON.stringify(text);
    }
  ).replace(
    /<!--([\w-]+)-->[\s\S]*<!--\/(\1)-->/g,
    removeRegion
  ).replace(
    /\/\*<([\w-]+)>\*\/[\s\S]*?\/\*<\/(\1)>\*\//g,
    removeRegion
  ).replace(
    /\/\*<include\s+([\w\/\\\-\.]+)>\*\//g,
    includeFile
  ).replace(
    /<!--include\s+([\w\/\\\-\.]+)-->/g,
    includeFile
  );
};
