import React, { Component } from 'react';


class TechList extends Component{

state = {
    tech:[
        'Node.js',
        'ReactJS',
        'React Native'
    ]
};    
    render(){
        console.log(this.state)
        return(
            <ul>
                <li>Node</li>
            </ul>
        );
    }
}

export default TechList