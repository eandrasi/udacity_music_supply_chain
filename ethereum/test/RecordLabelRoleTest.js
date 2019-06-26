const SupplyChain = artifacts.require("SupplyChain");

contract("Testing the RecordLabelRole contract", async accounts => {

    it("Can add a RecordLabel", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.addRecordLabel(accounts[1])
        assert.exists(result.tx);
    })
    
    it("Should return True for existing RecordLabel", async () => {
        let instance = await SupplyChain.deployed();
        let existingRecordLabel = await instance.isRecordLabel(accounts[1]);
        assert.isTrue(existingRecordLabel);
    })
    
    it("Should return False for non-existing RecordLabel", async () => {
        let instance = await SupplyChain.deployed();
        let nonExistingRecordLabel = await instance.isRecordLabel(accounts[2]);
        assert.isFalse(nonExistingRecordLabel);
    })
})