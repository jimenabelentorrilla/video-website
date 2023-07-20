import React from 'react';
import Data from "./data"; 

const ContainerFilms = () => {
  return (
    <>
    <div className="container-films">
      <h2>Recently Added Films</h2>
      <div className='sarasa' >
        {Data.map((movie, index) => (
          <div key={index}>
            <img className='img-w ' src={movie.img} />
          </div>
          
        ))}
      </div>
    </div>
      
    </>
  );
}

export default ContainerFilms;
