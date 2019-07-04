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

var _Web3Container = require('../ethereum/Web3Container');

var _Web3Container2 = _interopRequireDefault(_Web3Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edy/Desktop/Udacity/udacity_music_supply_chain/pages/index.js?entry';


var SupChain = function (_Component) {
    (0, _inherits3.default)(SupChain, _Component);

    function SupChain() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SupChain);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SupChain.__proto__ || (0, _getPrototypeOf2.default)(SupChain)).call.apply(_ref, [this].concat(args))), _this), _this.getUpc = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _this$props, accounts, contract;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this$props = _this.props, accounts = _this$props.accounts, contract = _this$props.contract;

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SupChain, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Supply Chain Music'), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Account Balance: ', this.props.upc, ' sss'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _props, accounts, contract, response;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _props = this.props, accounts = _props.accounts, contract = _props.contract;
                                _context2.next = 3;
                                return contract.methods.multi2(23).call();

                            case 3:
                                response = _context2.sent;

                                console.log("LLLLLLLLL" + response.toNumber());
                                // this.setState({upc: response})

                                upc = "ffjhndjfskfj";
                                return _context2.abrupt('return', { upc: upc });

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()

        // state = {
        //     balance: undefined,
        //     ethBalance: undefined,
        //     upc: 'aaa'
        // };

    }]);

    return SupChain;
}(_react.Component);

exports.default = SupChain;

// export default () => (
// <Web3Container
//     renderLoading={() => <div>Loading Dapp Page...</div>}
//     render={({ web3, accounts, contract }) => (
//     <SupChain accounts={accounts} contract={contract} web3={web3} />
//     )}
// />
// )
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiV2ViM0NvbnRhaW5lciIsIlN1cENoYWluIiwiZ2V0VXBjIiwicHJvcHMiLCJhY2NvdW50cyIsImNvbnRyYWN0IiwidXBjIiwibWV0aG9kcyIsIm11bHRpMiIsImNhbGwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJ0b051bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQW1COzs7Ozs7Ozs7SSxBQUVwQjs7Ozs7Ozs7Ozs7Ozs7O29OLEFBbUJGLGtGQUFTLG1CQUFBO3VDQUFBOzswRUFBQTswQkFBQTtxREFBQTs2QkFBQTswQ0FDd0IsTUFEeEIsQUFDNkIsT0FEN0IsQUFDRSx1QkFERixBQUNFLFVBREYsQUFDWSx1QkFEWixBQUNZOzs2QkFEWjs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBOzs7OztpQ0FJQSxBQUNMO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUVBLHVDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUF1QiwwQkFBQSxBQUFLLE1BQTVCLEFBQWtDLEtBSjFDLEFBQ0ksQUFHSSxBQUdYOzs7Ozs7Ozs7Ozs7eUNBNUJnQyxLLEFBQUssTyxBQUEzQixrQixBQUFBLFUsQUFBVSxrQixBQUFBOzt1Q0FDTSxTQUFBLEFBQVMsUUFBVCxBQUFpQixPQUFqQixBQUF3QixJLEFBQXhCLEFBQTRCOztpQ0FBN0M7QSxxREFDTjs7d0NBQUEsQUFBUSxJQUFJLGNBQWMsU0FBMUIsQUFBMEIsQUFBUyxBQUNuQztBQUVBOztzQ0FBQSxBQUFNO2tFQUNDLEVBQUMsSyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7QUFJWDs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBaUJKLEEsQUFsQ3VCOztrQkFrQ3ZCLEFBQWU7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWR5L0Rlc2t0b3AvVWRhY2l0eS91ZGFjaXR5X211c2ljX3N1cHBseV9jaGFpbiJ9