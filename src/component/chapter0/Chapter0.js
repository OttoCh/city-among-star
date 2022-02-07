import React, { Component } from 'react';
import { motion } from 'framer-motion'
import styled from "styled-components";


import Star from './Star.js';
import StarMain from './Star.png';
import StarMain2 from './Star2.png';
import StarBG from './StarBG.jpg';

const Background = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
    /* background-image: url(${StarBG}); */
`

const starImgPath = [ StarMain, StarMain2 ]

export class Chapter0 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            starImg: "url(" + starImgPath[0] + ")",
        }
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let i = this.getRandomInt(0, 1)
            this.setState({starImg: "url(" + starImgPath[i] + ")"})
        }, 500)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return(
            <Background>
                <Star 
                    starImg = {this.state.starImg}  
                ></Star>
            </Background>
        )
    }
}

export default Chapter0;