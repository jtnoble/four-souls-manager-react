import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../styles/CharacterPage.css'


export const CharacterPage = (props) => {
  const [ charTapped, setCharTapped ] = useState(false);
  const [ eternalTapped, setEternalTapped ] = useState(false);

  const TapCard = event =>{
    console.log(event.currentTarget);
    if (event.currentTarget.id === "Character-Card"){
      if(charTapped){
        event.currentTarget.style.transform = "rotate(0deg)";
        setCharTapped(false);
      }
      else {
        event.currentTarget.style.transform = "rotate(90deg)"
        setCharTapped(true)
      }
    }
    else if(event.currentTarget.id === "Eternal-Card"){
      if(eternalTapped){
        event.currentTarget.style.transform = "rotate(0deg)";
        setEternalTapped(false);
      }
      else {
        event.currentTarget.style.transform = "rotate(90deg)"
        setEternalTapped(true)
      }
    }
  }

  const { state } = useLocation();
  const character = state;
  console.log(character);
  return (
      <div className='char-page-header'>
        <div className='image-container'>
          <img id="Character-Card" className="cards" onClick={TapCard} src={character.char_img} alt={(character.name + " card")} />
          <img id="Eternal-Card" className="cards" onClick={TapCard} src={character.eternal_img} alt={(character.eternal + " card")} />
        </div>
      </div>

  
  )
}
