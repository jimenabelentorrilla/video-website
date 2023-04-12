import React from 'react';

const ContainerFilms = ({ title, images }) => {
  return (
    <div className='container-films'>
      <h2>{title}</h2>
      <div>
        {images.map((image, index) => {
          return (
            <div className='image-grid-flex' key={index}>
              {image.map((img, index) => {
                return (
                  <div key={index}>
                    <img className="img-w" src={img} alt="movie" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContainerFilms;
