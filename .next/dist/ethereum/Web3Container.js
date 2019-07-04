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

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _getContract = require('./getContract');

var _getContract2 = _interopRequireDefault(_getContract);

var _SupplyChain = require('./build/contracts/SupplyChain.json');

var _SupplyChain2 = _interopRequireDefault(_SupplyChain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Web3Container = function (_React$Component) {
  (0, _inherits3.default)(Web3Container, _React$Component);

  function Web3Container() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Web3Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Web3Container.__proto__ || (0, _getPrototypeOf2.default)(Web3Container)).call.apply(_ref, [this].concat(args))), _this), _this.state = { web3: null, accounts: null, contract: null }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Web3Container, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var web3, accounts, contract;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _web2.default)();

              case 3:
                web3 = _context.sent;
                _context.next = 6;
                return web3.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return (0, _getContract2.default)(web3, _SupplyChain2.default);

              case 9:
                contract = _context.sent;

                this.setState({ web3: web3, accounts: accounts, contract: contract });

                web3.eth.getAccounts().then(console.log);

                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](0);

                alert('Failed to load web3, accounts, or contract. Check console for details.');
                console.log(_context.t0);

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          web3 = _state.web3,
          accounts = _state.accounts,
          contract = _state.contract;

      return web3 && accounts ? this.props.render({ web3: web3, accounts: accounts, contract: contract }) : this.props.renderLoading();
    }
  }]);

  return Web3Container;
}(_react2.default.Component);

exports.default = Web3Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL1dlYjNDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRXZWIzIiwiZ2V0Q29udHJhY3QiLCJjb250cmFjdERlZmluaXRpb24iLCJXZWIzQ29udGFpbmVyIiwic3RhdGUiLCJ3ZWIzIiwiYWNjb3VudHMiLCJjb250cmFjdCIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwicHJvcHMiLCJyZW5kZXIiLCJyZW5kZXJMb2FkaW5nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW9CLEFBQXBCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXdCLEFBQXhCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQStCLEFBQS9COzs7Ozs7SUFFcUIsQTs7Ozs7Ozs7Ozs7Ozs7ME5BQ25CLEEsUUFBUSxFQUFFLE1BQU0sQUFBUixNQUFjLFVBQVUsQUFBeEIsTUFBOEIsVUFBVSxBQUF4QyxBOzs7Ozs7Ozs7Ozs7Ozt1QkFJZSxBOzttQkFBYjtBOzt1QkFDaUIsS0FBSyxBQUFMLElBQVMsQUFBVCxBOzttQkFBakI7QTs7dUJBQ2lCLDJCQUFZLEFBQVosQUFBa0IsQUFBbEIsQTs7bUJBQWpCO0Esb0NBQ047O3FCQUFLLEFBQUwsU0FBYyxFQUFFLE1BQUYsTUFBUSxVQUFSLFVBQWtCLFVBQWxCLEFBQWQsQUFFQTs7cUJBQUssQUFBTCxJQUFTLEFBQVQsY0FBdUIsQUFBdkIsS0FBNEIsUUFBUSxBQUFwQzs7Ozs7OztnREFHQTs7c0JBR0E7d0JBQVEsQUFBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUlNO21CQUM2QixLQUFLLEFBRGxDO1VBQ0EsQUFEQSxjQUNBLEFBREE7VUFDTSxBQUROLGtCQUNNLEFBRE47VUFDZ0IsQUFEaEIsa0JBQ2dCLEFBRGhCLEFBRVI7O2FBQU8sUUFBUSxBQUFSLFdBQ0gsS0FBSyxBQUFMLE1BQVcsQUFBWCxPQUFrQixFQUFFLE1BQUYsTUFBUSxVQUFSLFVBQWtCLFVBQWxCLEFBQWxCLEFBREcsY0FFSCxLQUFLLEFBQUwsTUFBVyxBQUFYLEFBRkosQUFHRDs7Ozs7RUF6QndDLGdCQUFNLEE7O2tCQUE1QixBIiwiZmlsZSI6IldlYjNDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkeS9EZXNrdG9wL1VkYWNpdHkvdWRhY2l0eV9tdXNpY19zdXBwbHlfY2hhaW4ifQ==