import React from "react";
import { Component } from "react/cjs/react.production.min";
import '../style/style.css';

export class ClassComponent extends Component{
constructor(){
super();

    this.state = {
        string:'IPhone 13'
    } 
    //    {
    //         title:'IPhone 13',
    //         space: '128gb',
    //         price: '1199',
    //         recurring: '31',
    //         color: 'Grey',
    //         id: 'ip1'
    //     },
    //     {
    //         title:'IPhone 13 Pro',
    //         space: '500gb',
    //         price: '1399',
    //         recurring: '38',
    //         color: 'Grey',
    //         id: 'ip2'
    //     },
    //     {
    //         title:'IPhone 13 Pro Max',
    //         space: '500gb',
    //         price: '1599',
    //         recurring: '41',
    //         color: 'White',
    //         id: 'ip3'
    //     },
    //     {
    //         title:'IPhone 12 Pro Max',
    //         space: '250gb',
    //         price: '1099',
    //         recurring: '27',
    //         color: 'Rosegold',
    //         id: 'ip4'
    //     }
    
    // ]
}
    render(){
        return(
            <React.Fragment>
                <h1>Class Component:<br />
                <small>with State props</small></h1><br />
                <h2>{this.state.string}</h2><br />
                <button onClick={() => this.setState({ string : 'Some SetState Action' })}> Change Title State</button>
            </React.Fragment>
        )
    }
}