import Web3 from 'web3'

const resolveWeb3 = async (resolve) => {
    let { web3 } = window
    const alreadyInjected = typeof web3 !== 'undefined' // i.e. Mist/Metamask
    const localProvider = `http://localhost:9545`
    const rinkeby = 'rinkeby.infura.io/v3/ab780f3c6414484ba5a2920d202e2690'
  
    if (alreadyInjected) {
      if(window.ethereum){
        console.log("modern dapp brpwser")
        web3 = new Web3(ethereum)
        try {
          await ethereum.enable()
        } catch (error) {
          console.log(error)
        }
      } else if (window.web3) {
        console.log(`Injected web3 detected.`)
        web3 = new Web3(web3.currentProvider)
      }
    } else {
      console.log(`No web3 instance injected, using Rinkeby web3.`)
      const provider = new Web3.providers.HttpProvider(rinkeby)
      web3 = new Web3(provider)
    }
  
    resolve(web3)
  }
  
export default () =>
new Promise((resolve) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener(`load`, () => {
    resolveWeb3(resolve)
    })
    // If document has loaded already, try to get Web3 immediately.
    if (document.readyState === `complete`) {
    resolveWeb3(resolve)
    }
})









// let web3

// // check if I am on the browser and that metamask has injected web3
// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//     // on the browser
//     web3 = new Web3(window.web3.currentProvider)
// } else {
//     // on the server or the user is not running metamask
//     const provider = new Web3.providers.HttpProvider(
//         'rinkeby.infura.io/v3/ab780f3c6414484ba5a2920d202e2690'
//     )

//     web3 = new Web3(provider)
// }

// console.log(web3.eth.getAccounts)

// export default web3