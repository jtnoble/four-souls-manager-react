import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import '../../styles/CharacterPage.css'
import { InputFields } from './InputFields'

// <img src={require("../../images/hearts.png")} alt="Health" />
export const BottomButtons = () => {
    const [overlayIndex, setOverlayIndex] = useState(-999)

    const CloseCounters = () =>{
        setOverlayIndex(-999);
    }
    const OpenCounters = () =>{
        setOverlayIndex(999);
    }
    const navigate = useNavigate();
    const HomeButton = () =>{
        const result = window.confirm("Return to homepage?");
        if (result) {
            navigate('/');
        }
        return;
    }

    return (
        <div className='Bottom-Page-Components' id='BtmBtns-Area'>
            <div id='Bottom-Page-Buttons'>
                <button id='Open-Counters-Button' onClick={OpenCounters}>Counters</button>
                <div id='Overlay-Counters-Page' style={{zIndex: overlayIndex}}>
                    <div id='Overlay-Counters-Page-Formatting'>
                        <InputFields inputNum={'Counters_Input_1'}/>
                        <InputFields inputNum={'Counters_Input_2'}/>
                        <InputFields inputNum={'Counters_Input_3'}/>
                        <button id='Close-Counters-Button' onClick={CloseCounters}>Back</button>
                    </div>
                </div>
                <button id='Home-Button' onClick={HomeButton}>Home</button>
            </div>
        </div>
    )
}
