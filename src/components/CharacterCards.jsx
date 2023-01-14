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
    const [ charTapIndex, setCharTapIndex ] = useState(8);
    const [ eternalTapIndex, setEternalTapIndex ] = useState(8);


    const TapCard = (zIndexCard, cardTapped, setCardTapped, setCardTapIndex, setZIndexCurrentCard, setZIndexOtherCard) =>{
        if (zIndexCard === 10){
            if (cardTapped){
                setCardTapped(false);
                setCardTapIndex(8);
            }
            else if (!charTapped){
                setCardTapped(true);
                setCardTapIndex(11);
            }   
        }
        else{
            setZIndexCurrentCard(10)
            setZIndexOtherCard(9)
        }
    }

    const { state } = useLocation();
    const character = state;
    
    return(
        <div id="card-area">
            <div id="Character-Card" onClick={() => TapCard(zIndexChar, charTapped, setCharTapped, setCharTapIndex, setZIndexChar, setZIndexEternal)}>
                <img className="cards" ref={characterCard} style={{zIndex: zIndexChar}} src={character.char_img} alt={(character.name + " card")} />
                <img src={require("../images/tappedOverlay.png")} style={{zIndex: charTapIndex}} alt="TAPPED" id='tappedCard1' className='cards'/>
            </div>
            <div id="Eternal-Card" onClick={() => TapCard(zIndexEternal, eternalTapped, setEternalTapped, setEternalTapIndex, setZIndexChar, setZIndexEternal)}>
                <img className="cards" ref={eternalCard} style={{zIndex: zIndexEternal}} src={character.eternal_img} alt={(character.eternal + " card")} />
                <img src={require("../images/tappedOverlay.png")} style={{zIndex: eternalTapIndex}} alt="TAPPED" id='tappedCard2' className='cards'/>
            </div>
        </div>     
    )
}