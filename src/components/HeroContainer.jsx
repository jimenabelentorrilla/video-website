import React from 'react';
import BtnWatch from "../assets/btn-watch.png";

const HeroContainer = () => {
  return (
    <div className='hero-container'>
        <div className='card-flex'>
            <div>
                <h1 className='main-title'>sam away</h1>
                <p className='film-info'>Adventure, Fantasy | 2019 | 136 Min.</p>
                <p className='film-about'>When a tornado hits through City of Peaceville,
                Samantha (Jenny Loifer) and her dog, Ricko, are whisked away in their house to an amazing journey.</p>
            </div>
            <div className="credits-flex">
                <div className='film-credits'>
                    <p>Director: Todd Burns</p>
                    <p>Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.</p>
                </div>
                <div className='btn-watch'>
                    <button> <img src={BtnWatch}/>Watch Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroContainer