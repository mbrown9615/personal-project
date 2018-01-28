import React, { Component } from 'react';

export default class Modal extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>

                <div>
                    <input></input>
                    <button onClick={()=> this.props.close()}>X</button>
                </div>

            </div>
        )
    }
}