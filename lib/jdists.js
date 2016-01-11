/**
 * @file fis-parser-jdists
 *
 * fis parser plugin
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 1.0.1
 * @date 2015-11-13
 */
var jdists = require('jdists');
module.exports = function (content, file, conf) {
  return jdists.build(content, {
    fromString: true,
    path: file.origin,
    remove: conf.remove,
    trigger: conf.trigger || global.fis && fis.project.currentMedia(),
    config: conf.config
  });
};
