import React from 'react'
import './hero.css';
import hand_icon from '../Assets/hand_icon.png';

const hero = () => {
  return (
    <div className='hero'>
      <div className='="hero-left'>
        <h2>FRESH VEGETABLES</h2>
      </div>
       <div className='hero-right'>
          <div className='hand-hand-icon'>
            <p>Fruits</p>
            <img src={hand_icon} alt=''/>
          </div>
          <p> All</p>
       </div>
    </div>
  )
}

export default hero
