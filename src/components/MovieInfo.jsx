import React from 'react';
import BtnWatch from "../assets/btn-watch.png";

function MovieInfo( { title , genero, year, duration, director, cast, description }) {
    return (
    <div className='hero-container'>
        <div className='card-flex'>
            <div>
                <h1 className='main-title'>{title}</h1>
                <p className='film-info'>{genero} | {year} | {duration}</p>
                <p className='film-about'>{description}</p>
            </div>
            <div className="credits-flex">
                <div className='film-credits'>
                    <p>Director: {director}</p>
                    <p>Cast: {cast}</p>
                </div>
                <div className='btn-watch'>
                    <button> <img src={BtnWatch}/>Watch Now</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default MovieInfo;