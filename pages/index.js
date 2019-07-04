import React, { Component } from 'react'
import Web3Container from '../ethereum/Web3Container'

class SupChain extends Component {

    static async getInitialProps() {
        const {accounts, contract} = this.props
        const response = await contract.methods.multi2(23).call()
        console.log("LLLLLLLLL" + response.toNumber())
        // this.setState({upc: response})

        upc = "ffjhndjfskfj"
        return {upc}

    }

    // state = {
    //     balance: undefined,
    //     ethBalance: undefined,
    //     upc: 'aaa'
    // };

    getUpc = async () => {
        const {accounts, contract} = this.props
    }

    render() {
        return (
            <div>
                <h1>Supply Chain Music</h1>
                
                <div>Account Balance: {this.props.upc} sss</div>
            </div>
        )
    }
}

export default SupChain;


// export default () => (
// <Web3Container
//     renderLoading={() => <div>Loading Dapp Page...</div>}
//     render={({ web3, accounts, contract }) => (
//     <SupChain accounts={accounts} contract={contract} web3={web3} />
//     )}
// />
// )