import React from 'react'
import "./MovieView.css";

function MovieView( { movie } ) {
  return (
    <>
      <div className='MovieView'>
        <h1>{movie.title}</h1>
        <h2>{movie.director}</h2>
      </div>
        
    </>
  )
}

export default MovieView;