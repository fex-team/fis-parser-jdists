var assert = require('should');
var fisregion = require('..');
var fs = require('fs');
var path = require('path');

var testdir = 'test/fixtures';
describe('fixtures', function() {
  var items = fs.readdirSync(testdir).filter(function(item) {
    return /\.(html|js|css)$/i.test(item) && !/\.output\./.test(item);
  });
  items.forEach(function(input) {
    var ext = input.replace(/(\.html|js|css)$/g, '$1');
    var output = input.replace(/\.(html|js|css)$/g, '.output.$1');
    var option = input.replace(/\.(html|js|css)$/g, '.json');
    var text_input = String(fs.readFileSync(path.join(testdir, input)));
    var text_output = String(fs.readFileSync(path.join(testdir, output)));
    var text_option = String(fs.readFileSync(path.join(testdir, option)));
    it(input, function() {
      assert.equal(
        text_output,
        fisregion(text_input, {
          filename: input,
          dirname: testdir,
          ext: ext
        }, JSON.parse(text_option))
      );
    });
  });
});