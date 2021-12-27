import React, { Component } from "react";

export class FetchData extends Component{
    constructor(){
        super();

        this.state={
            users: [
                {
                    uname: 'kandi',
                    uid: '4ui',
                    class: 8,
                    lname: 'kala'
                },
                {
                    uname: 'polla',
                    uid: '5ui',
                    class: 8,
                    lname: 'nathu'
                },
                {
                    uname: 'talla',
                    uid: '6ui',
                    class: 8,
                    lname: 'ram'
                }
            ]
        }  

        const pObj1= {
            name : 'krish',
            age : 3,
            lastName : 'Thakur',
            fullName : function(){
                return this.name + this.lastName;
            }
        }

        const pObj2= { 
            name : 'wallah',           
            age : 4,
            lastName : 'Kumar',
            fullName : function(){
                return this.lastName;
            },
            __proto__:pObj1
        }

        console.log('Object 1', pObj1.fullName());
        console.log('Object 2', pObj2.name);
    }


/* componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
} */



render(){
    return(
        <React.Fragment>
            {this.state.users.map(users =>(
               <h1 key={users.uid}>{users.uname}</h1> 
            ))}
        </React.Fragment>
    )
}
}