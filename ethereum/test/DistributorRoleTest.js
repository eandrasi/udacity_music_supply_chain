const SupplyChain = artifacts.require("SupplyChain");

contract("Testing the DistributorRole contract", async accounts => {

    it("Can add an Distributor", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.addDistributor(accounts[1])
        assert.exists(result.tx);
    })
    
    it("Should return True for existing distributor", async () => {
        let instance = await SupplyChain.deployed();
        let existingDistributor = await instance.isDistributor(accounts[1]);
        assert.isTrue(existingDistributor);
    })
    
    it("Should return False for non-existing distributor", async () => {
        let instance = await SupplyChain.deployed();
        let nonExistingDistributor = await instance.isDistributor(accounts[2]);
        assert.isFalse(nonExistingDistributor);
    })
})