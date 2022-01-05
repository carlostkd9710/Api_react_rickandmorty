import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Divstyle } from '../style/Stylecarddiv';

export default class Cards extends Component {
    render() {
        const{name, image,species}=this.props.obje1;
        return (
            <Divstyle>
                <Card style={{width:'18rem'}}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{species}</Card.Text>
                    </Card.Body>
                </Card>
            </Divstyle>
        )
    }
}
