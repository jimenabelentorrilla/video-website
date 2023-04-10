import React from 'react';
import ImageGrid from './ImageGrid';
import Image0 from "../assets/film-thumb.png"
import Image1 from "../assets/film-thumb (1).png";
import Image2 from "../assets/film-thumb (2).png";
import Image3 from "../assets/film-thumb (3).png";
import Image4 from "../assets/film-thumb (4).png";
import Image5 from "../assets/film-thumb (5).png";
import Image6 from "../assets/film-thumb (6).png";
import Image7 from "../assets/film-thumb (7).png";
import Image8 from "../assets/film-thumb (8).png";
import Image9 from "../assets/film-thumb (9).png";
import Image10 from "../assets/film-thumb (10).png";
import Image11 from "../assets/film-thumb (11).png";
import Image12 from "../assets/film-thumb (12).png";
import Image13 from "../assets/film-thumb (13).png";


const ContainerFilms = ({ title }) => {
  return (
    <div className='container-films'>
        <h2>{title}</h2>
        <ImageGrid 
        img0= {Image0}
        img1= {Image1}
        img2= {Image2}
        img3= {Image3}
        img4= {Image4}
        img5= {Image5} />
        <ImageGrid 
        img0= {Image6}
        img1= {Image7}
        img2= {Image8}
        img3= {Image9}
        img4= {Image10}
        img5= {Image11} />
    </div>
  )
}

export default ContainerFilms