import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../styles/CharacterPage.css'


export const CharacterCards = (props) => {
    //const characterCard = React.createRef();
    //const eternalCard = React.createRef();
    const [ charTapped, setCharTapped ] = useState(false);
    const [ eternalTapped, setEternalTapped ] = useState(false);
    const [ zIndexChar, setZIndexChar ] = useState(10);
    const [ zIndexEternal, setZIndexEternal ] = useState(9);
    const [ charTilt, setCharTilt ] = useState("0deg");
    const [ eternalTilt, setEternalTilt ] = useState("0deg");
    


    const TapCard = (zIndexCard, cardTapped, setCardTapped, setCardTilt, setZIndexCurrentCard, setZIndexOtherCard) =>{
        if (zIndexCard === 10){
            if (cardTapped){
                setCardTapped(false);
                setCardTilt("0deg");
            }
            else if (!cardTapped){
                setCardTapped(true);
                setCardTilt("90deg");
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
            <div id="Character-Card" onClick={() => TapCard(zIndexChar, charTapped, setCharTapped, setCharTilt, setZIndexChar, setZIndexEternal)}>
                <img className="cards" style={{zIndex: zIndexChar, rotate: charTilt}} src={character.char_img} alt={(character.name + " card")} />
            </div>
            <div id="Eternal-Card" onClick={() => TapCard(zIndexEternal, eternalTapped, setEternalTapped, setEternalTilt, setZIndexEternal, setZIndexChar)}>
                <img className="cards" style={{zIndex: zIndexEternal, rotate: eternalTilt}} src={character.eternal_img} alt={(character.eternal + " card")} />
            </div>
        </div>     
    )
}