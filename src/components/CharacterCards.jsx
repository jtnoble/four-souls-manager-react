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
            characterCard.current.style.zIndex = 9;
            setCharTapped(false);
            }
            else {
            characterCard.current.style.zIndex = 10;
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
                eternalCard.current.style.zIndex = 9;
                setEternalTapped(false);
            }
            else {
                eternalCard.current.style.zIndex = 10;
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
            <div id="Character-Card">
                <img className="cards" onClick={TapCard} ref={characterCard} style={{zIndex: zIndexChar}} src={character.char_img} alt={(character.name + " card")} />
                {tappedImage}
            </div>
            <div id="Eternal-Card">
                <img className="cards" onClick={TapCard} ref={eternalCard} style={{zIndex: zIndexEternal}} src={character.eternal_img} alt={(character.eternal + " card")} />
                {tappedImage}
            </div>
        </div>     
    )
}