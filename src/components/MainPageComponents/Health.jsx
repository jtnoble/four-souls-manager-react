import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../../styles/CharacterPage.css'
import { Counting } from './Counting'

export const Health = () => {
  return (
    <div className='Bottom-Page-Components'>
        <div className='Bottom-Page-Row'>
            <div id='Health-Area'>
                <img src={require("../../images/hearts.png")} alt="Health" />
                <Counting startValue={2} countType={'health-count'}/>
            </div>
        </div>
    </div>
  )
}
