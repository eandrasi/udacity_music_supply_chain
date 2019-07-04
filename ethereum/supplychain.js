import web3 from './web3';
import SupplyChain from './build/contracts/SupplyChain.json'

let instance

(async function () {
    try {
        const networkId = await web3.eth.getId()
        console.log("NETWORKID::" + networkId)
    
        const address = await SupplyChain.networks[networkId].address
        console.log("ADDRESS::" + address)
        
        instance = new web3.eth.Contract(
            SupplyChain.abi,
            address
        )

        console.log(instance)
    } catch (error) {
        console.log("ERROR::" + error)
    }
  }());


export default instance;
