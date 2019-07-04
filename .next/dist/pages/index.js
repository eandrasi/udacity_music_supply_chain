'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _supplychain = require('../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edy/Desktop/Udacity/udacity_music_supply_chain/pages/index.js?entry';


var SupChain = function (_Component) {
    (0, _inherits3.default)(SupChain, _Component);

    function SupChain() {
        (0, _classCallCheck3.default)(this, SupChain);

        return (0, _possibleConstructorReturn3.default)(this, (SupChain.__proto__ || (0, _getPrototypeOf2.default)(SupChain)).apply(this, arguments));
    }

    (0, _createClass3.default)(SupChain, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var a;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _supplychain2.default.methods.upc.call();

                            case 2:
                                a = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, 'Hellloo');
        }
    }]);

    return SupChain;
}(_react.Component);

exports.default = SupChain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3VwcGx5Y2hhaW4iLCJTdXBDaGFpbiIsIm1ldGhvZHMiLCJ1cGMiLCJjYWxsIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FFZ0Isc0JBQUEsQUFBWSxRQUFaLEFBQW9CLEksQUFBcEIsQUFBd0I7O2lDQUFsQztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBS0MsQUFDTDttQ0FBTyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQUFQLEFBQU8sQUFDVjs7Ozs7QUFHTCxBLEFBWnVCOztrQkFZdkIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWR5L0Rlc2t0b3AvVWRhY2l0eS91ZGFjaXR5X211c2ljX3N1cHBseV9jaGFpbiJ9