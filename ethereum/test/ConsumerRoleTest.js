const SupplyChain = artifacts.require("SupplyChain");

contract("Testing the ConsumerRole contract", async accounts => {

    it("Can add an Consumer", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.addConsumer(accounts[1])
        assert.exists(result.tx);
    })
    
    it("Should return True for existing consumer", async () => {
        let instance = await SupplyChain.deployed();
        let existingConsumer = await instance.isConsumer(accounts[1]);
        assert.isTrue(existingConsumer);
    })
    
    it("Should return False for non-existing consumer", async () => {
        let instance = await SupplyChain.deployed();
        let nonExistingConsumer = await instance.isConsumer(accounts[2]);
        assert.isFalse(nonExistingConsumer);
    })
})