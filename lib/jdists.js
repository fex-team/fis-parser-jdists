/**
 * @file fis-parser-jdists
 *
 * fis parser plugin
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 1.0.3
 * @date 2015-12-25
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
    trigger: conf.trigger || global.fis && fis.project.currentMedia(),
    config: conf.config
  });
};
