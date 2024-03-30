import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../styles/CountersPage.css'

export const CountersWindow = (props) => {
    const [windowIndex, setWindowIndex] = useState(props.windowIndex);
    const ReturnFromMenu = () => {
        setWindowIndex(-10);
    }
    return (
        <div id='Counters-Window' style={{zIndex: windowIndex}}>
            <h1>Counters Window</h1>
            <button onClick={ReturnFromMenu}>Back</button>
        </div>
    )
}
