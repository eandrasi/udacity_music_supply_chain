var ArtistRole = artifacts.require("./contracts/AccessControl/ArtistRole.sol")
var ConsumerRole = artifacts.require("./contracts/AccessControl/ConsumerRole.sol")
var ProducerRole = artifacts.require("./contracts/AccessControl/ProducerRole.sol")
var RecordLabelRole = artifacts.require("./contracts/AccessControl/RecordLabelRole.sol")
var DistributorRole = artifacts.require("./contracts/AccessControl/DistributorRole.sol")
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(ArtistRole);
  deployer.deploy(ConsumerRole);
  deployer.deploy(ProducerRole);
  deployer.deploy(RecordLabelRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(SupplyChain);
};