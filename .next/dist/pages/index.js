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

                                console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

                            case 4:
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
                    lineNumber: 11
                }
            }, 'Hellloo');
        }
    }]);

    return SupChain;
}(_react.Component);

exports.default = SupChain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3VwcGx5Y2hhaW4iLCJTdXBDaGFpbiIsIm1ldGhvZHMiLCJ1cGMiLCJjYWxsIiwiYSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFpQjs7Ozs7Ozs7O0ksQUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBRWdCLHNCQUFBLEFBQVksUUFBWixBQUFvQixJLEFBQXBCLEFBQXdCOztpQ0FBbEM7QSw2Q0FDSjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHUCxBQUNMO21DQUFPLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxhQUFBLEVBQVAsQUFBTyxBQUNWOzs7OztBQUdMLEEsQUFYdUI7O2tCQVd2QixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZHkvRGVza3RvcC9VZGFjaXR5L3VkYWNpdHlfbXVzaWNfc3VwcGx5X2NoYWluIn0=