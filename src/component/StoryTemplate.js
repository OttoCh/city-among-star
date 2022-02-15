import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import D1L1 from './chapter1/D1L1.jpg';
import sample from './chapter0/StarBG.jpg'
import Dialogue from './Dialogue';

const BackgroundMain = styled(motion.div)`
    position: absolute;
    /* display: flex; */
    /* justify-content: center; */
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

const NarrativeMain = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    right: ${passed => passed.align === 'left' ? 'auto' : 0};
    left: ${passed => passed.align === 'right' ? 'auto' : 0};
    top: 40%;
    padding: auto;
    width: 50%;
    height: 100%;
    opacity: 1;
`

function StoryTemplate(props) {

    const controls = useAnimation();

    const sequence = async() => {
        return await controls.start({
            opacity: 1,
            transition: {
                delay: ( props.delay === undefined ? 1 : props.delay),
                duration: ( props.duration === undefined ? 4 : props.duration)
            }
        })
    }

    useEffect(() => {
        sequence();
    })

    return(
        <div className='main'>
        <BackgroundMain
            bgimage={"url(" + D1L1 + ")"}
            animate={controls}
        >
            <NarrativeMain
                align={"right"}
            >
                {Dialogue.D1[0]}
            </NarrativeMain>
        </BackgroundMain>
        </div>
    )

}

export default StoryTemplate;