import React, { Component } from 'react';

import StoryTemplate from '../StoryTemplate';
import Dialogue from '../Dialogue';

import D1L1 from './D1L1.jpg';

export class Chapter1 extends Component {
    currentIndex = 0;

    constructor(props) {
        super(props)
        this.state = {
            background: D1L1,
            dialog: Dialogue.D1[this.currentIndex],
            dialogAlign: "right",
        }
    }

    onNextDialog = () => {
        console.log("next")
        this.currentIndex += 1;
        this.setState({
            dialog: Dialogue.D1[this.currentIndex]
        })
    }

    render() {
        return(
            <div className='main'>
                <StoryTemplate
                    background={this.state.background}
                    dialogAlign={this.state.dialogAlign}
                    dialog={this.state.dialog}
                    onNextDialog={this.onNextDialog}
                ></StoryTemplate>
            </div>
        )
    }
}