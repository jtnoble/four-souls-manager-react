import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../../styles/CharacterPage.css'

export const Attack = () => {
  return (
    <div className='Bottom-Page-Components' id='Attack-Area'>
        <img src={require("../../images/sword.png")} alt="Atk Power" />
    </div>
  )
}
