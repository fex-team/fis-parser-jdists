(function () {
  $('#panel').innerHTML = format( "\n<div>\n  <a href=\"#{url}\">#{title}</a>\n  <button>cancel</button><button>download</button>\n</div>\n  ", {
    title: 'loading',
    url: 'http://www.baidu.com/'
  });
})();