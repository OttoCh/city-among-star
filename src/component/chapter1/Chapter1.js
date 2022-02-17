import React, { Component } from 'react';

import StoryTemplate from '../StoryTemplate';
import Dialogue from '../Dialogue';

import D1L1 from './D1L1.jpg';

export class Chapter1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: D1L1,
            dialog: Dialogue.D1,
            dialogAlign: "right",
            activeDialog: 0,
        }
    }

    onNextDialog = () => {
        let newActiveDialog = this.state.activeDialog + 1;
        this.setState({
            activeDialog: newActiveDialog
        })

        if(newActiveDialog >= this.state.dialog.length) {
            this.changeChapter();
        }
    }

    changeChapter = () => {
        console.log("change chapter")
        this.props.nextChapter();
    }

    render() {
        return(
            <div className='main'>
                <StoryTemplate
                    background={this.state.background}
                    dialogAlign={this.state.dialogAlign}
                    dialog={this.state.dialog}
                    activeDialog={this.state.activeDialog}
                    onNextDialog={this.onNextDialog}
                ></StoryTemplate>
            </div>
        )
    }
}