import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../../styles/CharacterPage.css'
import { Character } from './Character'

export const Eternal = (props) => {
    const characterCard = Character.setCardZIndex();
    const character = props.character;
    const eternalCard = React.createRef();
    const [ cardTapped, setCardTapped ] = useState(false);
    const [ cardZIndex, setCardZIndex ] = useState(10);
    const [ tapOverlayZIndex, setTapOverlayZIndex] = useState(8);

    const TapCard = () =>{
        if (cardZIndex === 10){
            if (cardTapped){
                setCardTapped(false);
                setTapOverlayZIndex(8);
            }
            else if (!cardTapped){
                setCardTapped(true);
                setTapOverlayZIndex(11);
            } 
        }
        else{
            setCardZIndex(cardZIndex + 2);
            characterCard(2);
        }
    }
  return (
    <div id="Eternal-Card" onClick={() => TapCard()}>
        <img className="cards" ref={eternalCard} style={{zIndex: cardZIndex}} src={character.eternal_img} alt={(character.eternal + " card")} />
        <img src={require("../../images/tappedOverlay.png")} style={{zIndex: tapOverlayZIndex}} alt="TAPPED" id='tappedCard2' className='cards'/>
    </div>
  )
}
