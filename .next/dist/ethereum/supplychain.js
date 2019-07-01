'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _SupplyChain = require('./build/SupplyChain.json');

var _SupplyChain2 = _interopRequireDefault(_SupplyChain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_SupplyChain2.default.interface), '0xe22478c96B3Cd50F01017E65364105F251417d67');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3N1cHBseWNoYWluLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJTdXBwbHlDaGFpbiIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLEtBQUssQUFBTCxNQUFXLHNCQUFZLEFBQXZCLEFBRGEsWUFFYixBQUZhLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoic3VwcGx5Y2hhaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkeS9EZXNrdG9wL1VkYWNpdHkvdWRhY2l0eV9tdXNpY19zdXBwbHlfY2hhaW4ifQ==