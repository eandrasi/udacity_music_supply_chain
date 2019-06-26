pragma solidity ^0.5.7;

// Import the library 'Roles'
import "./Roles.sol";

contract ProducerRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event ProducerAdded(address indexed account);
  event ProducerRemoved(address indexed account);

  Roles.Role private producers;

  constructor() public {
    _addProducer(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyProducer() {
    require(isProducer(msg.sender));
    _;
  }

  function isProducer(address account) public view returns (bool) {
    return producers.has(account);
  }

  function addProducer(address account) public {
    _addProducer(account);
  }

  function renounceProducer() public {
    _removeProducer(msg.sender);
  }

  function _addProducer(address account) internal {
    producers.add(account);
    emit ProducerAdded(account);
  }

  function _removeProducer(address account) internal {
    producers.remove(account);
    emit ProducerRemoved(account);    
  }
}