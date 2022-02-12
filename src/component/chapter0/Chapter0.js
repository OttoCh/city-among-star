import React, { Component } from 'react';
import { motion, useAnimation } from 'framer-motion'
import styled from "styled-components";


import Star from './Star.js';
import StarMain from './Star.png';
import StarMain2 from './Star2.png';
import StarMain3 from './Star3.png';
import StarMain4 from './Star4.png';
import StarMain5 from './Star5.png';
import StarBG from './StarBG.jpg';
import StarBG2 from './StarBG2.jpg';

import Background from './Background.js';
import Background2 from './Background2.js';

const starImgPath = [ StarMain, StarMain2, StarMain3, StarMain4, StarMain5 ]
let currentImgIndex = 0;

const StarTimer = 2;
const Bg1Timer = StarTimer + 1;
const Bg2Timer = StarTimer + 4

export class Chapter0 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            starImg: "url(" + starImgPath[0] + ")",
            starTimer: StarTimer,
            bg1Timer: Bg1Timer,
            bg2Timer: Bg2Timer,
            bgImage: "url(" + StarBG + ")",
            bgImage2: "url(" + StarBG2 + ")",
        }
        // setTimeout(this.setStarBackground, this.state.starTimer * 1000) ;
        // controls = useAnimation();
    }

    setStarBackground = () => {
        // //do the start animation
        // //https://www.framer.com/docs/animation/##sequencing
        // const bgImage = "url(" + StarBG + ")"
        // controls.start({
        //     initial: { opacity: 0 },
        //     animate: { opacity: 1 },
        //     backgroundImage: bgImage,
        //     transition: { duration: 3 },
        // })

    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            currentImgIndex = this.getRandomInt(0,starImgPath.length-1);
            this.setState({starImg: "url(" + starImgPath[currentImgIndex] + ")"})
        }, 300)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        return(
            <div className='main'>
            <Background 
                bgImage={this.state.bgImage} 
                starTimer={this.state.Bg1Timer}>
            </Background>
            <Background2
                bgImage={this.state.bgImage2}
                starTimer={this.state.Bg2Timer}
            >
            </Background2>
            <Star 
                starImg={this.state.starImg} 
                starTimer={this.state.starTimer}
            ></Star>
            </div>
        )
    }
}

export default Chapter0;