import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../styles/CharacterPage.css'


export const CharacterCards = (props) => {
    const characterCard = React.createRef();
    const eternalCard = React.createRef();
    const [ charTapped, setCharTapped ] = useState(false);
    const [ eternalTapped, setEternalTapped ] = useState(false);
    const [ zIndexChar, setZIndexChar ] = useState(10);
    const [ zIndexEternal, setZIndexEternal ] = useState(9);
    const tappedImage = <img src={require("../images/tappedOverlay.png")} alt="TAPPED" id='tappedCard' className='cards'/>

    const TapCard = event =>{
        if (event.currentTarget.id === characterCard.current.id){
        if (zIndexChar === 10){
            if(charTapped){
            characterCard.current.style.opacity = "0.3";
            setCharTapped(false);
            }
            else {
            characterCard.current.style.opacity = "1.0";
            setCharTapped(true)
            }
        }
        else{
            setZIndexChar(10);
            setZIndexEternal(9);
        }
        }
        else if(event.currentTarget.id === eternalCard.current.id){
        if (zIndexEternal === 10){
            if(eternalTapped){
                eternalCard.current.style.opacity = "0.3";
                setEternalTapped(false);
            }
            else {
                eternalCard.current.style.opacity = "1.0";
                setEternalTapped(true)
            }
        }
        else{
            setZIndexChar(9);
            setZIndexEternal(10);
        }
        }
    }

    const { state } = useLocation();
    const character = state;
    
    return(
        <div id="card-area">
            <div>
                <img id="Character-Card" className="cards" onClick={TapCard} ref={characterCard} style={{zIndex: zIndexChar}} src={character.char_img} alt={(character.name + " card")} />
                {tappedImage}
            </div>
            <img id="Eternal-Card" className="cards" onClick={TapCard} ref={eternalCard} style={{zIndex: zIndexEternal}} src={character.eternal_img} alt={(character.eternal + " card")} />
        </div>     
    )
}