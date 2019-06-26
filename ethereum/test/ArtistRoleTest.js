const SupplyChain = artifacts.require("SupplyChain");

contract("Testing the ArtistRole contract", async accounts => {

    it("Can add an Artist", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.addArtist(accounts[1])
        assert.exists(result.tx);
    })
    
    it("Should return True for existing artist", async () => {
        let instance = await SupplyChain.deployed();
        let existingArtist = await instance.isArtist(accounts[1]);
        assert.isTrue(existingArtist);
    })
    
    it("Should return False for non-existing artist", async () => {
        let instance = await SupplyChain.deployed();
        let nonExistingArtist = await instance.isArtist(accounts[2]);
        assert.isFalse(nonExistingArtist);
    })
})