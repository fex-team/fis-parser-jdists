/*<jdists encoding="candy">*/
(function () {
  $('#panel').innerHTML = format( /*#*/ function () {
    /*!
<div>
  <a href="#{url}">#{title}</a>
  <button>cancel</button><button>download</button>
</div>
  */
  }, {
    title: 'loading',
    url: 'http://www.baidu.com/'
  });
})();
/*</jdists>*/