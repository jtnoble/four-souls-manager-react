import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../../styles/CharacterPage.css'


export const Character = (props) => {
    const character = props.character;
    const characterCard = React.createRef();
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
    }

  return (
    <div id="Character-Card" onClick={() => TapCard()}>
        <img className="cards" ref={characterCard} style={{zIndex: cardZIndex}} src={character.char_img} alt={(character.name + " card")} />
        <img src={require("../../images/tappedOverlay.png")} style={{zIndex: tapOverlayZIndex}} alt="TAPPED" id='tappedCard1' className='cards'/>
    </div>
  )
}
