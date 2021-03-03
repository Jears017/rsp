import React from 'react'
import useSound from 'use-sound';
import sound from '../assets/salamisound-3834747-alarm-electric-alarm-clock.mp3'

function Demo() {
    // Попробуйте, ради интереса, поменять 'rising-pops' на:
    // - fanfare
    // - dun-dun-dun
    // - guitar-loop

    const [play, { stop }] = useSound(
        sound,
        { volume: 0.5 }
    );

    const [isHovering, setIsHovering] = React.useState(
        false
    );

    return (
        <button
            onMouseEnter={() => {
                setIsHovering(true);
                play();
            }}
            onMouseLeave={() => {
                setIsHovering(false);
                stop();
            }}
        >
            <ButtonContents isHovering={isHovering}>
                Hover over me!
            </ButtonContents>
        </button>
    );
}