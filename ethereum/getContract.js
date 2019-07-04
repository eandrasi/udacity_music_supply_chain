const getContractInstance = async (web3, contractDefinition) => {
    // get network ID and the deployed address
    const networkId = await web3.eth.net.getId()
    const deployedAddress = contractDefinition.networks[networkId].address
  
    // create the instance
    const instance = new web3.eth.Contract(
      contractDefinition.abi,
      deployedAddress
    )
    return instance
  }
  
  export default getContractInstance















// import web3 from './web3';
// import SupplyChain from './build/contracts/SupplyChain.json'

// let instance

// (async function () {
//     try {
//         const networkId = await web3.eth.getId()
//         console.log("NETWORKID::" + networkId)
    
//         const address = await SupplyChain.networks[networkId].address
//         console.log("ADDRESS::" + address)
        
//         instance = new web3.eth.Contract(
//             SupplyChain.abi,
//             address
//         )

//         console.log(instance)
//     } catch (error) {
//         console.log("ERROR::" + error)
//     }
//   }());


// export default instance;
