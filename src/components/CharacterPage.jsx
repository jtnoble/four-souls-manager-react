import React from 'react'
import '../styles/CharacterPage.css'
import { CharacterCards } from './CharacterCards'


export const CharacterPage = (props) => {
  
  return (
      <div className='char-page-header'>
        <div className='container'>
          <CharacterCards />
        </div>
      </div>

  
  )
}
