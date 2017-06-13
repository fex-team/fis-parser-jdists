/**
 * @file fis-parser-jdists
 *
 * fis parser plugin
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 2.0.17
 * @date 2017-06-13
 */
var jdists = require('jdists');
module.exports = function (content, file, conf) {
  if (!file.isText()) { // 非文本文件原样返回
    return content;
  }
  return jdists.build(content, {
    fromString: true,
    path: file.origin,
    remove: conf.remove,
    trigger: conf.trigger || (global.fis && global.fis.project.currentMedia()),
    config: conf.config
  });
};