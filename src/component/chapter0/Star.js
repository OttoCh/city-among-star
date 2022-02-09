import React from 'react';
import { motion } from 'framer-motion'
import styled from "styled-components";

const StarMain = styled(motion.div)`
    position: fixed;
    left: 50%;
    top: 40%;
    bottom: 60%;
    right: 50%;
    height: 20px;
    width: 20px;
    display: block;
    background-size: 100% 100%;
    background-image: ${passed => passed.starimg};
    opacity: 1;
`

function Star(props) {
    return(
        <StarMain 
        className={props.className}
        starimg={props.starImg}
        animate={{ y: [-500, 0] }}
        transition={{ duration: props.starTimer }}  
        ></StarMain>
    )

}

export default Star;