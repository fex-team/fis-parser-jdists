void function(exports) {
  /*<debug>*/
  console.log('hello world!');
  /*</debug>*/

  exports.hello = function() {
    /*<dev-version>*/
    console.log('hello world!');
    /*</dev-version>*/
  }
}(this);