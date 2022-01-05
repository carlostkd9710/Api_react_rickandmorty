import React, { Component } from 'react';
import Cards from './Cards';

export default class Lista extends Component {

    constructor(){
        super();
        this.state={
            tarjeta:[]
        }
    }

    async componentDidMount(){
        const url= 'https://rickandmortyapi.com/api/character/'
        const resp = await fetch(url);
        const data = await resp.json();
        const{results}=data;
        console.log(results);
        this.setState({tarjeta:results})
    }

    render() {
        return (
            <div>
                {
                    this.state.tarjeta.map((objeto1,index)=>(
                        <Cards key={index} obje1={objeto1}/>
                    ))
                }
            </div>
        )
    }
}
