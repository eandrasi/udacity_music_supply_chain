pragma solidity ^0.5.7;

import './ArtistRole.sol';
import './ConsumerRole.sol';
import './ProducerRole.sol';
import './RecordLabelRole.sol';
import './DistributorRole.sol';

contract AccessControl is ArtistRole, ConsumerRole, ProducerRole, RecordLabelRole, DistributorRole {
    
    constructor() public {
        
    }
    
}