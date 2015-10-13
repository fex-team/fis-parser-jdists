/**
 * @file fis-parser-jdists
 *
 * fis parser plugin
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 1.0.0
 * @date 2015-10-13
 */
var jdists = require('jdists');
module.exports = function (content, file, conf) {
  return jdists.build(content, {
    fromString: true,
    path: file.filename,
    remove: conf.remove,
    trigger: conf.trigger,
    config: conf.config
  });
};