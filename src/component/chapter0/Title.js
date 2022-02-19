import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import styled from "styled-components";

const TitleMain = styled(motion.div)`
    position: absolute;
    margin: auto;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    opacity: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${passed => passed.bgimage};
    background-size: cover;
`

function Title(props) {
    const controls = useAnimation();

    const sequence = async() => {
        await controls.start({
            opacity: 1,
            transition: {
                delay: props.timer + 2,
                duration: 2
            }
        })
        await props.nextChapter();
    }

    useEffect(() => {
        sequence();
    }, [])

    return(
        <TitleMain
            bgimage={props.bgImage}
            animate={controls}
        >
        </TitleMain>
    )
}

export default Title;