import React from 'react'

const ImageGrid = ({ img0 , img1, img2, img3, img4, img5 }) => {
  return (
    <div className='image-grid-flex'>
        <div>
            <img className="img-w" src={img0} /> 
        </div>
        <div>
            <img className="img-w" src={img1} /> 
        </div>
        <div>
            <img className="img-w" src={img2} /> 
        </div>
        <div>
            <img className="img-w" src={img3} /> 
        </div>
        <div>
            <img className="img-w" src={img4} /> 
        </div>
        <div>
            <img className="img-w" src={img5} /> 
        </div>
    </div>
  )
}

export default ImageGrid