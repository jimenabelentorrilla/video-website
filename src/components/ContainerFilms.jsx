import React from 'react';
import Data from "../data/data"; 
import { Link } from 'react-router-dom';

const ContainerFilms = () => {
  return (
    <>
    <div className="container-films">
      <h2>Agregados recientemente</h2>
      <div className='sarasa' >
        {Data.map((movie, index) => (
          <Link to={movie.title}>
            <div key={index}>
              <img className='img-w ' src={movie.img} />
            </div>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
}

export default ContainerFilms;
