'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _SupplyChain = require('./build/contracts/SupplyChain.json');

var _SupplyChain2 = _interopRequireDefault(_SupplyChain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = void 0;

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var networkId, address;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _web2.default.eth.getId();

                case 3:
                    networkId = _context.sent;

                    console.log("NETWORKID::" + networkId);

                    _context.next = 7;
                    return _SupplyChain2.default.networks[networkId].address;

                case 7:
                    address = _context.sent;

                    console.log("ADDRESS::" + address);

                    instance = new _web2.default.eth.Contract(_SupplyChain2.default.abi, address);

                    console.log(instance);
                    _context.next = 16;
                    break;

                case 13:
                    _context.prev = 13;
                    _context.t0 = _context['catch'](0);

                    console.log("ERROR::" + _context.t0);

                case 16:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this, [[0, 13]]);
}))();

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3N1cHBseWNoYWluLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJTdXBwbHlDaGFpbiIsImluc3RhbmNlIiwiZXRoIiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJjb25zb2xlIiwibG9nIiwibmV0d29ya3MiLCJhZGRyZXNzIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXdCLEFBQXhCOzs7Ozs7QUFFQSxJQUFJLGdCQUFKOztBQUVDLDRGQUFBO21CQUFBO2tFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBO29DQUFBOzJCQUUrQixjQUFLLEFBQUwsSUFBUyxBQUFULEFBRi9COztxQkFFYTtBQUZiLHlDQUdPOzs0QkFBUSxBQUFSLElBQVksZ0JBQWdCLEFBQTVCLEFBSFA7O29DQUFBOzJCQUs2QixzQkFBWSxBQUFaLFNBQXFCLEFBQXJCLFdBQWdDLEFBTDdEOztxQkFLYTtBQUxiLHVDQU1POzs0QkFBUSxBQUFSLElBQVksY0FBYyxBQUExQixBQUVBOzsrQkFBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDUCxzQkFBWSxBQURMLEtBRVAsQUFGTyxBQUFYLEFBS0E7OzRCQUFRLEFBQVIsSUFBWSxBQUFaLEFBYlA7b0NBQUE7QUFBQTs7cUJBQUE7b0NBQUE7b0RBZU87OzRCQUFRLEFBQVIsSUFBWSxxQkFBWixBQWZQOztxQkFBQTtxQkFBQTtvQ0FBQTs7QUFBQTsyQkFBQTtBQUFELEFBb0JBOztrQkFBZSxBQUFmIiwiZmlsZSI6InN1cHBseWNoYWluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZHkvRGVza3RvcC9VZGFjaXR5L3VkYWNpdHlfbXVzaWNfc3VwcGx5X2NoYWluIn0=