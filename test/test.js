var assert = require('should');
var fis_jdists = require('../');
var fs = require('fs');
var path = require('path');

var testdir = 'test/fixtures';
describe('fixtures', function () {
  var items = fs.readdirSync(testdir).filter(function (item) {
    return /\.(html|js|css)$/i.test(item) && !/\.output\./.test(item);
  });
  items.forEach(function (input) {
    input = path.join(testdir, input);
    var output = input.replace(/\.(html|js|css)$/g, '.output.$1');
    var option = input.replace(/\.(html|js|css)$/g, '.json');

    function cleanCRLF(content) {
      return String(content).replace(/\r\n?|[\n\u2028\u2029]/g, '\n')
        .replace(/^\uFEFF/, ''); // 数据清洗
    }

    var text_input = String(fs.readFileSync(input));
    var text_output = cleanCRLF(String(fs.readFileSync(output)));
    var text_option = String(fs.readFileSync(option));

    it(input, function () {
      assert.equal(
        text_output,
        fis_jdists(text_input, {
          origin: input,
          filename: path.basename(input),
          dirname: testdir,
          ext: path.basename(input),
          isText: function () {
            return true;
          }
        }, JSON.parse(text_option))
      );
    });
  });
  it('binary', function () {
    assert.equal(
      'object',
      typeof fis_jdists(new Buffer('binary'), {
        isText: function () {
          return false;
        },
      }, {})
    );
  });
});

describe('options', function () {
  global.fis = {
    project: {
      currentMedia: function () {
        return 'qa';
      }
    }
  };

  it('default trigger is current media', function () {
    var input = path.join(testdir, 'temp.txt');
    assert.equal(
      'js',
      fis_jdists('j<!--remove trigger="qa"-->dist<!--/remove-->s', {
        origin: input,
        filename: path.basename(input),
        dirname: testdir,
        ext: path.basename(input),
        isText: function () {
          return true;
        }
      }, {})
    );
  });

});