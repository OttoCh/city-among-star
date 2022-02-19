import React, { useState } from 'react';
import Chapter0 from './chapter0/Chapter0'
import Chapter1 from './chapter1/Chapter1'


const totalChapter = 6;

const chapvariant = {
        hidden: {
            opacity: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
            }
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.7,
                duration: 0.5,
            }
        }
    }

var chapterKey = [Math.random(),
                    Math.random()
]

class ChapterWrapper extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentChapter: 0,

        }
    }

    changeChapter = () => {
        this.next();
        console.log("Change Scene " + this.state.currentChapter)
        console.log(chapterKey)
        if(this.state.currentChapter < totalChapter) {
            let nextChapter = this.state.currentChapter + 1;
            this.setState({
                currentChapter: nextChapter
            })
            chapterKey[nextChapter - 1] = Math.random()
            console.log(chapterKey)
        }
        this.next();
    }

    next = () => {
        console.log(this.state)
        console.log(this.state.currentChapter === 0 ? "visible" : "hidden")
    }


    render() {
        return (
        <div className='App'>
            {/* <Chapter0
                variants={chapvariant}
                initials="hidden"
                animate={this.state.currentChapter === 0 ? "visible" : "hidden"}
                nextChapter={this.changeChapter}
                key={chapterKey[0]}
            ></Chapter0> */}
            <Chapter1
                variants={chapvariant}
                initials="visible"
                animate={this.state.currentChapter === 1 ? "visible" : "hidden"}
                nextChapter={this.changeChapter}
                key={chapterKey[1]}
            ></Chapter1>
        </div>
        )
    }
}

export default ChapterWrapper;