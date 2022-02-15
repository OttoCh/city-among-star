import React, { Component } from 'react';

import D1L1 from './D1L1.jpg';

export class Chapter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgImage: "url(" + D1L1 + ")"
        }
    }

    render() {
        return(
            <div className='main'>
                
            </div>
        )
    }
}