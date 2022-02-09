import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import Star from './Star';

const BackgroundMain = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
    background-image: ${passed => passed.bgimage};
    opacity: 0;
`

function Background(props) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            transition: { delay: props.starTimer + 1},
        }))
    }, [])

    return(
        <BackgroundMain
            bgimage={props.bgImage}
            animate={controls}
        >
        </BackgroundMain>
    )
}

export default Background;