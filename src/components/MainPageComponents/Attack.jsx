import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../../styles/CharacterPage.css'
import { Counting } from './Counting'

export const Attack = () => {
  return (
    <div className='Bottom-Page-Components'>
        <div className='Bottom-Page-Row'>
            <div id='Attack-Area'>
            <   img src={require("../../images/sword.png")} alt="Atk Power" /> 
                <Counting startValue={1} countType={'attack-count'}/>
            </div>
        </div>
    </div>
  )
}
