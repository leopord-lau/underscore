(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('underscore', factory) :
  (global = global || self, (function() {
    var current = global._;
    var exports = global._ = factory();
    exports.noConflict = function () { global._ = current; return exports };
  }()))
}(this, (function () {
  var VERSION = '1.0.0';

  var objPro = Object.prototype
  var toString = objPro.toString
  var hasProperty = objPro.hasOwnProperty

  function isBoolean (obj) {
    return obj === true || obj === false || toString.call(obj) === '[string Boolean]'
  }

  function _(obj) {
    if(obj instanceof _) return obj;
    if(!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  }
  _.

})))