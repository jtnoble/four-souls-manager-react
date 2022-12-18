import React from 'react'
import '../styles/CharacterPage.css'
import { CharacterCards } from './CharacterCards'


export const CharacterPage = (props) => {
  
  return (
      <div className='char-page-header'>
        <div className='grid-container'>
          <CharacterCards />
        </div>
      </div>

  
  )
}
