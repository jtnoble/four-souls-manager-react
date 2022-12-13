import React from 'react'
import { useNavigate } from 'react-router'


export const CharacterSelector = ({characters}) => {
  const navigate = useNavigate()
  const handleClick = async (character) => {
    console.log(character);
    const result = await window.confirm("Play as " + character.name + "?");
    if (result) {
      navigate('/play', {state: character});
    }
    console.log("You click No!");
    return;
  };
  return (
    <div className='App-header'>
      <h1>CharacterSelector</h1>
      <div>
        {characters.map(character => {
          return (
          <div className='images' onClick={() => handleClick(character)} key={character.key}>
            <img className='cards' src={character.char_img} alt={character.name}/>
            <img className='cards' src={character.eternal_img} alt={character.eternal}/>
          </div>
          )
        })}
      </div>
    </div>

  )
}
