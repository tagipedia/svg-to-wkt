
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Testing helpers.
 *
 * @package     svg-to-wkt
 * @copyright   2012 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

_t = (function() {
  var _t = {};


  /**
   * Reset constants.
   */
  _t.reset = function() {
    SVGtoWKT.PRECISION = 3;
    SVGtoWKT.DENSITY = 1;
  };


  /**
   * Count the number of points in a WKT string.
   *
   * @param {String} wkt: The WKT string.
   * @return {Number}: The point count.
   */
  _t.countPoints = function(wkt) {
    return wkt.match(/\(([\s\S]+)\)/)[1].split(',').length;
  };


  return _t;
})();
