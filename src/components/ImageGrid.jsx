import React from 'react'


const ImageGrid = ({ images, onClick }) => {
  return (
    <div>
        {images.map((image,index) => (
            <div className='image-grid-flex' key={index}>
                {image.map((img, index) => (
                    <div key={index} >
                        <img className="img-w" src={img} /> 
                    </div>
            ))}
        </div>
    ))}
    </div>
  )
}


export default ImageGrid;