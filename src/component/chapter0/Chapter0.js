import React, { Component } from 'react';
import { motion } from 'framer-motion'
import styled from "styled-components";
import fish from './fish.png'

const Background = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: black;
`

const Star = styled(motion.div)`
    position: fixed;
    margin-left: 43.75%;
    height: 25%;
    width: 12.5%;
    top: 37.5%;
    display: block;
    background-size: 100% 100%;
    background-image: url(${fish});
`

export class Chapter0 extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <Background>
                <Star 
                    animate={{ y: 100 }}
                    transition={{ duration: 2 }}    
                ></Star>
            </Background>
        )
    }
}

export default Chapter0;