"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var getContractInstance = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(web3, contractDefinition) {
    var networkId, deployedAddress, instance;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return web3.eth.net.getId();

          case 2:
            networkId = _context.sent;
            deployedAddress = contractDefinition.networks[networkId].address;

            // create the instance

            instance = new web3.eth.Contract(contractDefinition.abi, deployedAddress);
            return _context.abrupt("return", instance);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getContractInstance(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = getContractInstance;

// import web3 from './web3';
// import SupplyChain from './build/contracts/SupplyChain.json'

// let instance

// (async function () {
//     try {
//         const networkId = await web3.eth.getId()
//         console.log("NETWORKID::" + networkId)

//         const address = await SupplyChain.networks[networkId].address
//         console.log("ADDRESS::" + address)

//         instance = new web3.eth.Contract(
//             SupplyChain.abi,
//             address
//         )

//         console.log(instance)
//     } catch (error) {
//         console.log("ERROR::" + error)
//     }
//   }());


// export default instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2dldENvbnRyYWN0LmpzIl0sIm5hbWVzIjpbImdldENvbnRyYWN0SW5zdGFuY2UiLCJ3ZWIzIiwiY29udHJhY3REZWZpbml0aW9uIiwiZXRoIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJkZXBsb3llZEFkZHJlc3MiLCJuZXR3b3JrcyIsImFkZHJlc3MiLCJpbnN0YW5jZSIsIkNvbnRyYWN0IiwiYWJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGtDQUFBO3NGQUFzQixpQkFBTyxBQUFQLE1BQWEsQUFBYixvQkFBQTtvQ0FBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUVBLEtBQUssQUFBTCxJQUFTLEFBQVQsSUFBYSxBQUFiLEFBRkE7O2VBRWxCO0FBRmtCLGlDQUdsQjtBQUhrQiw4QkFHQSxtQkFBbUIsQUFBbkIsU0FBNEIsQUFBNUIsV0FBdUMsQUFIdkMsQUFLeEI7O0FBQ007O0FBTmtCLHVCQU1QLElBQUksS0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLG1CQUFtQixBQURKLEtBRWYsQUFGZSxBQU5POzZDQVVqQixBQVZpQjs7ZUFBQTtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXRCOzsrQ0FBQTs0QkFBQTtBQUFBO0FBQU4sQUFhRTs7a0JBQWUsQUFBZjs7QUFnQkY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBIiwiZmlsZSI6ImdldENvbnRyYWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZHkvRGVza3RvcC9VZGFjaXR5L3VkYWNpdHlfbXVzaWNfc3VwcGx5X2NoYWluIn0=