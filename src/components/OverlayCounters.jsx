import React from 'react'
import { useState, useRef } from 'react'
import { useLocation } from 'react-router'
import '../styles/CharacterPage.css'

export const OverlayCounters = (props) => {
    const [overlayIndex, setOverlayIndex] = useState()

    const CloseMenu = () =>{
        setOverlayIndex(-1000);
    }

    return (
        <div id='Overlay-Counters-Page' style={{zIndex: overlayIndex}}>
            <h1>Overlay Page</h1>
            <button onClick={CloseMenu}>Close Page</button>
        </div>
    )
}
