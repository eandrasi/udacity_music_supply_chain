const SupplyChain = artifacts.require("SupplyChain");

contract("Testing the Ownable contract", async accounts => {

    it("Can look up the owner", async () => {
        let instance = await SupplyChain.deployed();
        let owner = await instance.owner()
        assert.equal(owner, accounts[0]);
    })

    it("Should return true for accounts[0]", async () => {
        let instance = await SupplyChain.deployed();
        let owner = await instance.isOwner({from:accounts[0]})
        assert.isTrue(owner);
    })
    
    it("Should return false for accounts[1]", async () => {
        let instance = await SupplyChain.deployed();
        let owner = await instance.isOwner({from:accounts[1]})
        assert.isFalse(owner);
    })
    
    it("Should transfer ownership to accounts[1]", async () => {
        let instance = await SupplyChain.deployed();
        let origowner = await instance.transferOwnership(accounts[1], {from:accounts[0]})
        let owner = await instance.isOwner({from:accounts[1]})
        assert.isTrue(owner);
    })

    it("Should renounce Ownership", async () => {
        let instance = await SupplyChain.deployed();
        let renounce = await instance.renounceOwnership({from:accounts[1]})
        let owner = await instance.isOwner({from:accounts[1]})
        assert.isFalse(owner);
        assert.equal(owner, 0);
    })
})