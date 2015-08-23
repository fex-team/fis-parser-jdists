/**
 * @file fis-postprocessor-region
 *
 * fis parser plugin
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 0.0.4
 * @date 2015-08-23
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