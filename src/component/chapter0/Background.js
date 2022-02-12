import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const BackgroundMain = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${passed => passed.bgimage};
    background-size: contain;
    /* overflow: hidden; */
    opacity: 0;
`

function Background(props) {
    const controls = useAnimation();

    const sequence = async () => {
        await controls.start({
            opacity: 1,
            transition: {
                delay: props.starTimer + 1,
                duration: 3
            },
        })
        return await controls.start({ 
            top: "-100%",
            transition: {
                delay: 1,
                duration: 4
            }
        })
    }

    useEffect(() => {
        sequence();
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