'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var resolveWeb3 = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
    var _window, web3, alreadyInjected, localProvider, rinkeby, provider;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _window = window, web3 = _window.web3;
            alreadyInjected = typeof web3 !== 'undefined'; // i.e. Mist/Metamask

            localProvider = 'http://localhost:9545';
            rinkeby = 'rinkeby.infura.io/v3/ab780f3c6414484ba5a2920d202e2690';

            if (!alreadyInjected) {
              _context.next = 21;
              break;
            }

            if (!window.ethereum) {
              _context.next = 18;
              break;
            }

            console.log("modern dapp brpwser");
            web3 = new _web2.default(ethereum);
            _context.prev = 8;
            _context.next = 11;
            return ethereum.enable();

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](8);

            console.log(_context.t0);

          case 16:
            _context.next = 19;
            break;

          case 18:
            if (window.web3) {
              console.log('Injected web3 detected.');
              web3 = new _web2.default(web3.currentProvider);
            }

          case 19:
            _context.next = 24;
            break;

          case 21:
            console.log('No web3 instance injected, using Rinkeby web3.');
            provider = new _web2.default.providers.HttpProvider(rinkeby);

            web3 = new _web2.default(provider);

          case 24:

            resolve(web3);

          case 25:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[8, 13]]);
  }));

  return function resolveWeb3(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = function () {
  return new _promise2.default(function (resolve) {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', function () {
      resolveWeb3(resolve);
    });
    // If document has loaded already, try to get Web3 immediately.
    if (document.readyState === 'complete') {
      resolveWeb3(resolve);
    }
  });
};

// let web3

// // check if I am on the browser and that metamask has injected web3
// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//     // on the browser
//     web3 = new Web3(window.web3.currentProvider)
// } else {
//     // on the server or the user is not running metamask
//     const provider = new Web3.providers.HttpProvider(
//         'rinkeby.infura.io/v3/ab780f3c6414484ba5a2920d202e2690'
//     )

//     web3 = new Web3(provider)
// }

// console.log(web3.eth.getAccounts)

// export default web3
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlc29sdmVXZWIzIiwicmVzb2x2ZSIsIndpbmRvdyIsIndlYjMiLCJhbHJlYWR5SW5qZWN0ZWQiLCJsb2NhbFByb3ZpZGVyIiwicmlua2VieSIsImV0aGVyZXVtIiwiY29uc29sZSIsImxvZyIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7QUFFUCxJQUFNLDBCQUFBO3NGQUFjLGlCQUFBLEFBQU8sU0FBUDtnRUFBQTs7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTtzQkFBQSxBQUNELFFBREMsQUFDVixlQURVLEFBQ1YsQUFDQTtBQUZVLDhCQUVRLE9BQUEsQUFBTyxTQUZmLEFBRXdCLGFBQVksQUFDOUM7O0FBSFUsNEJBSVY7QUFKVSxzQkFBQSxBQUlBOztpQkFKQSxBQU1aLGlCQU5ZOzhCQUFBO0FBQUE7QUFBQTs7aUJBT1gsT0FQVyxBQU9KLFVBUEk7OEJBQUE7QUFBQTtBQVFaOztvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO21CQUFPLEFBQUksa0JBVEMsQUFTWixBQUFPLEFBQVM7NEJBVEo7NEJBQUE7bUJBV0osU0FYSSxBQVdKLEFBQVM7O2VBWEw7NEJBQUE7QUFBQTs7ZUFBQTs0QkFBQTs0Q0FhVjs7b0JBQUEsQUFBUSxhQWJFOztlQUFBOzRCQUFBO0FBQUE7O2VBZVA7Z0JBQUksT0FBSixBQUFXLE1BQU0sQUFDdEI7c0JBQUEsQUFBUSxJQUNSO3FCQUFPLEFBQUksa0JBQUssS0FBaEIsQUFBTyxBQUFjLEFBQ3RCO0FBbEJhOztlQUFBOzRCQUFBO0FBQUE7O2VBb0JkO29CQUFBLEFBQVEsSUFDRjtBQXJCUSx1QkFxQkcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQXJCdEIsQUFxQkcsQUFBZ0MsQUFDakQ7O21CQUFPLEFBQUksa0JBdEJHLEFBc0JkLEFBQU8sQUFBUzs7ZUFHbEI7O29CQXpCZ0IsQUF5QmhCLEFBQVE7O2VBekJRO2VBQUE7NEJBQUE7O0FBQUE7NEJBQUE7QUFBZDs7a0NBQUE7NEJBQUE7QUFBQTtBQUFOLEFBNEJBOztrQkFBZSxZQUFBOytCQUNILFVBQUEsQUFBQyxTQUFZLEFBQ3JCO0FBQ0E7V0FBQSxBQUFPLHlCQUF5QixZQUFNLEFBQ3RDO2tCQUFBLEFBQVksQUFDWDtBQUZELEFBR0E7QUFDQTtRQUFJLFNBQUEsQUFBUyxlQUFiLFlBQXdDLEFBQ3hDO2tCQUFBLEFBQVksQUFDWDtBQUNKO0FBVmMsQUFDZixHQUFBO0FBREE7O0FBb0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkeS9EZXNrdG9wL1VkYWNpdHkvdWRhY2l0eV9tdXNpY19zdXBwbHlfY2hhaW4ifQ==