pragma solidity ^0.5.7;

// Import the library 'Roles'
import "./Roles.sol";

contract DistributorRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event DistributorAdded(address indexed account);
  event DistributorRemoved(address indexed account);

  Roles.Role private distributors;

  constructor() public {
    _addDistributor(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyDistributor() {
    require(isDistributor(msg.sender));
    _;
  }

  function isDistributor(address account) public view returns (bool) {
    return distributors.has(account);
  }

  function addDistributor(address account) public {
    _addDistributor(account);
  }

  function renounceDistributor() public {
    _removeDistributor(msg.sender);
  }

  function _addDistributor(address account) internal {
    distributors.add(account);
    emit DistributorAdded(account);
  }

  function _removeDistributor(address account) internal {
    distributors.remove(account);
    emit DistributorRemoved(account);    
  }
}