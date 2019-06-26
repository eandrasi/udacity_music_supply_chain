const SupplyChain = artifacts.require("SupplyChain");
const truffleAssert = require('truffle-assertions');

contract("Testing the SupplyChain contract", async accounts => {

    const contractOwnerAcc  = accounts[0]
    const artistAcc         = accounts[1]
    const producerAcc       = accounts[2]
    const recordLabelAcc    = accounts[3]
    const distributorAcc    = accounts[4]
    const consumerAcc       = accounts[5]
    const addressZero       = "0x0000000000000000000000000000000000000000"

    console.log("contractOwnerAcc   ->" + contractOwnerAcc )
    console.log("artistAcc          ->" + artistAcc )
    console.log("producerAcc        ->" + producerAcc )
    console.log("recordLabelAcc     ->" + recordLabelAcc )
    console.log("distributorAcc     ->" + distributorAcc )
    console.log("consumerAcc        ->" + consumerAcc )

    it("Can deploy the contract", async () => {
	    let instance = await SupplyChain.deployed();
        let result = await instance;
        assert.exists(result);
    })


    ////////////////////////////////////    register with role     ////////////////////////////////////////
    it("The Artist can become the Owner", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.transferOwnership(artistAcc)
        assert.equal(result.logs[0].event, "TransferOwnership")

        let owner = await instance.owner()
        assert.equal(owner, artistAcc)
    })

    it("Can register as Artist", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.registerArtistID({from:artistAcc})
        assert.equal(result.logs[0].event, "ArtistAdded")

        let role = await instance.isArtist(artistAcc)
        assert.isTrue(role)
    })
    
    it("Can register as Producer", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.registerProducerID({from:producerAcc})
        assert.equal(result.logs[0].event, "ProducerAdded")

        let role = await instance.isProducer(producerAcc)
        assert.isTrue(role)
    })

    it("Can register as RecordLabel", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.registerRecordLabelID({from:recordLabelAcc})
        assert.equal(result.logs[0].event, "RecordLabelAdded")

        let role = await instance.isRecordLabel(recordLabelAcc)
        assert.isTrue(role)
    })

    it("Can register as Distributor", async () => {
        let instance = await SupplyChain.deployed();
        let result = await instance.registerDistributorID({from:distributorAcc})
        assert.equal(result.logs[0].event, "DistributorAdded")

        let role = await instance.isDistributor(distributorAcc)
        assert.isTrue(role)
    })


    ////////////////////////////////////    composeAlbum     ////////////////////////////////////////
    it("Can compose an Album", async () => {
        let instance = await SupplyChain.deployed();
        // an address can call the composeAlbum function and become the artist for that album
        // it must declare the producer
        let newAlbum = await instance.composeAlbum(1, artistAcc, "TheArtistName", 
                                        "TheArtistInformation", "AlbumName", producerAcc,
                                        {from:artistAcc})
        assert.exists(newAlbum)
        assert.equal(newAlbum.logs[0].event, "Composed")
    })

    it("Should not be able to create an Album with existing upc", async () => {
        let instance = await SupplyChain.deployed();
        await truffleAssert.reverts(instance.composeAlbum(1, artistAcc, "TheArtistName", 
                                        "TheArtistInformation", "AlbumName", producerAcc,
                                        {from:artistAcc}))
    })

    it("Should not be able to create an Album with upc = 0", async () => {
        let instance = await SupplyChain.deployed();
        await truffleAssert.reverts(instance.composeAlbum(0, artistAcc, "TheArtistName", 
                                        "TheArtistInformation", "AlbumName", producerAcc,
                                        {from:artistAcc}))
    })

    it("Should not be able to create an Album with producerID = addressZero", async () => {
        let instance = await SupplyChain.deployed();
        await truffleAssert.reverts(instance.composeAlbum(2, artistAcc, "TheArtistName", 
                                        "TheArtistInformation", "AlbumName", addressZero,
                                        {from:artistAcc}))
    })

////////////////////////////////////    recordAlbum     ////////////////////////////////////////
    it("Can Record an Album", async () => {
        let instance = await SupplyChain.deployed()
        let recordedAlbum = await instance.recordAlbum(1, {from:producerAcc})
        assert.exists(recordedAlbum)
        assert.equal(recordedAlbum.logs[0].event, "Recorded")
    })
    
    it("Should not record an album that has not been composed", async () => {
        let instance = await SupplyChain.deployed()
        await truffleAssert.reverts(instance.recordAlbum(1000, {from:producerAcc}))
    })
    
    it("Should not record if not the producer", async () => {
        let instance = await SupplyChain.deployed()
        let newAlbum = await instance.composeAlbum(2, artistAcc, "TheArtistName", 
                                        "TheArtistInformation", "AlbumName", producerAcc,
                                        {from:artistAcc})
        assert.equal(newAlbum.logs[0].event, "Composed")

        await truffleAssert.reverts(instance.recordAlbum(2, {from:artistAcc}))
    })


    ////////////////////////////////////    arrangeAlbum     ////////////////////////////////////////
    it("Can Arrange an Album", async () => {
	    let instance = await SupplyChain.deployed();
        let arrangedAlbum = await instance.arrangeAlbum(1, {from:producerAcc})
        assert.exists(arrangedAlbum)
        assert.equal(arrangedAlbum.logs[0].event, "Arranged")
    })
    
    it("Should not arrange an album that has not been recorded", async () => {
        let instance = await SupplyChain.deployed();
        await instance.composeAlbum(3, artistAcc, "TheArtistName", 
                                        "TheArtistInformation", "AlbumName", producerAcc,
                                        {from:artistAcc})
        await truffleAssert.reverts(instance.arrangeAlbum(3, {from:producerAcc}))
    })

    it("Should not arrange if not the producer", async () => {
	    let instance = await SupplyChain.deployed();
        await instance.composeAlbum(4, artistAcc, "TheArtistName", 
                                        "TheArtistInformation", "AlbumName", producerAcc,
                                        {from:artistAcc})
        await instance.recordAlbum(4, {from:producerAcc})
        await truffleAssert.reverts(instance.arrangeAlbum(4, {from:artistAcc}))
    })

    
    ////////////////////////////////////    createCover     ////////////////////////////////////////
    it("Should not create cover if recordLabelAcc is 0", async () => {
	    let instance = await SupplyChain.deployed();
        await truffleAssert.reverts(instance.createCover(1, addressZero, {from:producerAcc}))
    })
    
    it("Can Create Cover", async () => {
	    let instance = await SupplyChain.deployed();
        let albumCover = await instance.createCover(1, recordLabelAcc, {from:producerAcc})
        assert.exists(albumCover)
        assert.equal(albumCover.logs[0].event, "WithCover")
    })

    it("Should not create cover if the album is not yet arranged", async () => {
        let instance = await SupplyChain.deployed();
        await instance.recordAlbum(3, {from:producerAcc})
        await truffleAssert.reverts(instance.createCover(3, recordLabelAcc, {from:producerAcc}))
    })

    it("Should not create cover if not producer", async () => {
        let instance = await SupplyChain.deployed();
        await instance.arrangeAlbum(4, {from:producerAcc})
        await truffleAssert.reverts(instance.createCover(4, recordLabelAcc, {from:artistAcc}))
    })


    ////////////////////////////////////    publishAlbum     ////////////////////////////////////////
    it("Can publish an album", async () => {
        let instance = await SupplyChain.deployed();
        let publishedAlbum = await instance.publishAlbum(1, {from:recordLabelAcc})
        assert.exists(publishedAlbum)
        assert.equal(publishedAlbum.logs[0].event, "Published")
    })


    ////////////////////////////////////    distributeAlbum     ////////////////////////////////////////
    it("Can distribute an Album", async () => {
	    let instance = await SupplyChain.deployed();
        let distributedAlbum = await instance.distributeAlbum(1, distributorAcc, {from:recordLabelAcc})
        assert.exists(distributedAlbum)
        assert.equal(distributedAlbum.logs[0].event, "Distributed")
    })


    ////////////////////////////////////    sellItem     ////////////////////////////////////////
    it("Can sell an Item", async () => {
        let instance = await SupplyChain.deployed();
        let sellItem = await instance.sellItem(1, 400, {from:distributorAcc})
        assert.exists(sellItem)
        assert.equal(sellItem.logs[0].event, "ForSale")

    })


    ////////////////////////////////////    buyItem     ////////////////////////////////////////
    it("Can buy an Item", async () => {
        let instance = await SupplyChain.deployed()
        let buyItem = await instance.buyItem(1, {from:consumerAcc, value:400})
        assert.exists(buyItem)
        assert.equal(buyItem.logs[0].event, "Sold")
    })
    
    it("Another customer can buy another copy", async () => {
        let instance = await SupplyChain.deployed()
        let buyItem = await instance.buyItem(1, {from:accounts[6], value:400})
        assert.exists(buyItem)
        assert.equal(buyItem.logs[0].event, "Sold")
    })


    ////////////////////////////////////    owner     ////////////////////////////////////////
    it("Can display the owner", async () => {
        let instance = await SupplyChain.deployed()
        let owner = await instance.owner()
        assert.exists(owner)
        assert.equal(owner, artistAcc)
    })
    
    it("The owner can kill the contract", async () => {
        let instance = await SupplyChain.deployed()
        let killed = await instance.kill({from:artistAcc})
        assert.exists(killed)
    })


    ////////////////////////////////////    fetchAlbumInfo     ////////////////////////////////////////
    // it("Can fetch the Album Info", async () => {
    //     let instance = await SupplyChain.deployed()
    //     let album = await instance.fetchAlbumInfo(1)
    //     console.log(album)
    //     // assert.exists(owner)
    //     // assert.equal(owner, artistAcc)
    // })    
    
    
    // it("Should say hello", async () => {
    //     let instance = await SupplyChain.deployed()
    //     let album = await instance.sayHello()
    //     console.log(album)
    //     // assert.exists(owner)
    //     // assert.equal(owner, artistAcc)
    // })    



    // it("TBD", async () => {
	//     let instance = await SupplyChain.deployed();

    // })



});