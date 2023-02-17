import React from 'react'
import '../styles/CharacterPage.css'
import { CharacterCards } from './CharacterCards'
import { CharacterControls } from './CharacterControls'



export const CharacterPage = (props) => {
  
  return (
      <div className='char-page-header'>
        <div className='container'>
          <CharacterCards />
          <CharacterControls />
        </div>
      </div>

  
  )
}
