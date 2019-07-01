import React, { Component } from 'react'
import supplychain from '../ethereum/supplychain'

class SupChain extends Component {
    async componentDidMount() {
        let a = await supplychain.methods.upc.call();
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    }

    render() {
        return <div>Hellloo</div>
    }
}

export default SupChain