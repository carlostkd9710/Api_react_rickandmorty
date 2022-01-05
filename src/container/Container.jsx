import { Divcont } from '../style/Styledivcont'
import React, { Component } from 'react'
import Lista from '../components/Lista'

export default class Container extends Component {
    render() {
        return (
            <Divcont>
                <h1>Api de Rick and Morty</h1>
                <Lista/>
            </Divcont>
        )
    }
}
