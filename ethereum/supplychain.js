import web3 from './web3';
import SupplyChain from './build/SupplyChain.json'

const instance = new web3.eth.Contract(
    JSON.parse(SupplyChain.interface),
    '0xe22478c96B3Cd50F01017E65364105F251417d67'
)

export default instance;