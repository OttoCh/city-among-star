import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import Star from './Star';

const BackgroundMain = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200%;
    background-color: black;
    background-image: ${passed => passed.bgimage};
    /* overflow: hidden; */
    opacity: 0;
`

function Background(props) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            y: [null, -500, -800],
            transition: {
                delay: props.starTimer + 1,
                duration: 3,
                times: [0, 0.5, 1]
            },
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