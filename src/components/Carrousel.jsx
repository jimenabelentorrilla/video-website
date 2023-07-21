import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Car1 from "../assets/volver.jpg";
import Car2 from "../assets/casino.jpg";
import Car3 from "../assets/eyes.jpg";
import BtnWatch from "../assets/btn-watch.png";


function Carrousel() {
  return (
    <div>
        <Carousel 
        className='hei-car'
        fade indicators={false} 
        nextIcon={null} 
        prevIcon={null} >
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src={Car1}
          alt="First slide"
        />
        <Carousel.Caption>
        
        <div className='card-flex'>
            <div>
                <h1 className='main-title'>volver</h1>
                <p className='film-info'>Comedia | 2006 | 121 Min.</p>
                <p className='film-about'>Volver es un melodrama intergeneracional sobre la feminidad y la resiliencia españolas, protagonizado por Penélope Cruz junto a un elenco de actores habituales de Almodóvar, como Carmen Maura y Lola Dueñas. Explora cómo nos persiguen los fantasmas del pasado y qué podemos hacer para expiarnos.</p>
            </div>
            <div className="credits-flex">
                <div className='film-credits'>
                    <p>Director: Pedro Almodóvar</p>
                    <p>Cast: Penélope Cruz, Carmen Maura, Lola Dueñas.</p>
                </div>
                <div className='btn-watch'>
                    <button> <img src={BtnWatch}/>Watch Now</button>
                </div>
            </div>
        </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src={Car2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='card-flex'>
            <div>
                <h1 className='main-title'>casino</h1>
                <p className='film-info'>Thriller | 1995 | 171 Min.</p>
                <p className='film-about'>Sam Rothstein maneja un casino en Las Vegas, pero lo hace sin tener la licencia necesaria. Al despedir de su casino al hijo de un alguacil, empieza a tener serios problemas con la ley al mismo tiempo que su esposa pierde la compostura.</p>
            </div>
            <div className="credits-flex">
                <div className='film-credits'>
                    <p>Director: Martin Scorsese</p>
                    <p>Cast: Robert De Niro, Sharon Stone, Joe Pesci.</p>
                </div>
                <div className='btn-watch'>
                    <button> <img src={BtnWatch}/>Watch Now</button>
                </div>
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src={Car3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='card-flex'>
            <div>
                <h1 className='main-title'>Ojos bien cerrados</h1>
                <p className='film-info'>Terror | 1999 | 159 Min.</p>
                <p className='film-about'>William y Alice son un matrimonio que lo tiene todo: belleza, riqueza, trabajo, posición, una hija encantadora. Sin embargo, la rutina preside sus vidas. Una noche, Alice confiesa a su esposo una fantasía erótica con otro hombre, que le dominó meses atrás. Este suceso transforma sus vidas.</p>
            </div>
            <div className="credits-flex">
                <div className='film-credits'>
                    <p>Director: Stanley Kubrick</p>
                    <p>Cast: Tom Cruise, Nicole Kidman, Madison Eginton.</p>
                </div>
                <div className='btn-watch'>
                    <button> <img src={BtnWatch}/>Watch Now</button>
                </div>
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carrousel