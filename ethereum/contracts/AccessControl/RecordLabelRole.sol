pragma solidity ^0.5.7;

// Import the library 'Roles'
import "./Roles.sol";

contract RecordLabelRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event RecordLabelAdded(address indexed account);
  event RecordLabelRemoved(address indexed account);

  Roles.Role private recordLabels;

  constructor() public {
    _addRecordLabel(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyRecordLabel() {
    require(isRecordLabel(msg.sender));
    _;
  }

  function isRecordLabel(address account) public view returns (bool) {
    return recordLabels.has(account);
  }

  function addRecordLabel(address account) public {
    _addRecordLabel(account);
  }

  function renounceRecordLabel() public {
    _removeRecordLabel(msg.sender);
  }

  function _addRecordLabel(address account) internal {
    recordLabels.add(account);
    emit RecordLabelAdded(account);
  }

  function _removeRecordLabel(address account) internal {
    recordLabels.remove(account);
    emit RecordLabelRemoved(account);    
  }
}