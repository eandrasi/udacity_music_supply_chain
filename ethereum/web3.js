import Web3 from 'web3'

let web3

// check if I am on the browser and that metamask has injected web3
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // on the browser
    web3 = new Web3(window.web3.currentProvider)
} else {
    // on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'rinkeby.infura.io/v3/ab780f3c6414484ba5a2920d202e2690'
    )

    web3 = new Web3(provider)
}

console.log(web3.eth.getAccounts)

export default web3