import React from 'react';
import Data from "../data/data"; 
import { Link } from 'react-router-dom';

const ContainerFilms = () => {
  return (
    <>
    <div className="container-films">
      <h2>Desde clásicos de culto hasta obras maestras modernas.</h2>
        <div className='sarasa' >
          {Data.map((movie, index) => (
              <div className='card-movie'>
                <div key={index}>
                <Link to={movie.title}><img className='img-w ' src={movie.img} /></Link>
                </div>
                <div>
                <Link to={movie.title}><p className='mv-title'>{movie.title}</p></Link>
                </div>
              </div>
          ))}
        </div>
    </div>
    </>
  );
}

export default ContainerFilms;
