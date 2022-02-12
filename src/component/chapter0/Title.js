import React, { useEffect } from 'react';

const TitleMain = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    background-image: ${passed => passed.titleimage};
    width: 100%;
    height: 100%;
    opacity: 0;
`

function Title(props) {
    const controls = useAnimation();

    const sequence = async() => {
        await controls.start({
            opacity: 1,
            transition: {
                delay: props.startTimer + 2,
                duration: 2
            }
        })
    }

    return(
        <TitleMain
            bgimage={props.titleImg}
            animate={controls}
        >
        </TitleMain>
    )
}