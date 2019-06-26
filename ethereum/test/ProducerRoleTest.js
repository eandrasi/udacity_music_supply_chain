const SupplyChain = artifacts.require("SupplyChain");

contract("Testing the ProducerRole contract", async accounts => {

    it("Can add an Producer", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.addProducer(accounts[1])
        assert.exists(result.tx);
    })
    
    it("Should return True for existing producer", async () => {
        let instance = await SupplyChain.deployed();
        let existingProducer = await instance.isProducer(accounts[1]);
        assert.isTrue(existingProducer);
    })
    
    it("Should return False for non-existing producer", async () => {
        let instance = await SupplyChain.deployed();
        let nonExistingProducer = await instance.isProducer(accounts[2]);
        assert.isFalse(nonExistingProducer);
    })
})