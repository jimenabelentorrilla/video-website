import './App.css'
import Sidebar from './components/Sidebar';
import MovieInfo from './components/MovieInfo';
import ContainerFilms from './components/ContainerFilms';
import Footer from './components/Footer';
import Image1 from "./assets/film01.jpg";
import Image2 from "./assets/film02.jpg";
import Image3 from "./assets/film03.jpg";
import Image4 from "./assets/film04.jpg";
import Image5 from "./assets/film05.jpg";
import Image6 from "./assets/film06.jpg";
import Image7 from "./assets/film07.jpg";
import Image8 from "./assets/film08.jpg";
import Image9 from "./assets/film09.jpg";
import Image10 from "./assets/film10.jpg";
import Image11 from "./assets/film11.jpg";
import Image12 from "./assets/film12.jpg";
import Image13 from "./assets/film13.jpg";
import Image14 from "./assets/film14.jpg";
import Image15 from "./assets/film15.jpg";
import Image16 from "./assets/film16.jpg";
import Image17 from "./assets/film17.jpg";
import Image18 from "./assets/film18.jpg";
import Image19 from "./assets/film19.jpg";
import Image20 from "./assets/film20.jpg";
import Image21 from "./assets/film21.jpg";
import Image22 from "./assets/film22.jpg";
import Image23 from "./assets/film23.jpg";
import Image24 from "./assets/film24.jpg";
import Image25 from "./assets/film25.jpg";

const semana1 = [
  [Image1, Image2, Image3, Image4, Image5]
];

const semana2 = [
  [Image6, Image7, Image8, Image9, Image10]
];

const semana3 = [
  [Image11, Image12, Image13, Image14, Image15]
];

const semana4 = [
  [Image16, Image17, Image18, Image19, Image20]
];

const semana5 = [
  [Image21, Image22, Image23, Image24, Image25]
];

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MovieInfo
        title="SAM AWAY" 
        genero="Adventure, Fantasy" 
        year="2019" 
        duration="136 Min." 
        director="Todd Burns" 
        cast="Jenny Loifer, Sarah Obrien, Larry Moss Jr." 
        description="When a tornado hits through City of Peaceville,
        Samantha (Jenny Loifer) and her dog, Ricko, are whisked away in their house to an amazing journey." />
      <ContainerFilms 
        title="Semana 1"
        images={semana1} />

      <ContainerFilms 
        title="Semana 2"
        images={semana2} />

      <ContainerFilms 
        title="Semana 3"
        images={semana3} />

      <ContainerFilms 
        title="Semana 4"
        images={semana4} />

      <ContainerFilms 
        title="Semana 5"
        images={semana5} />
    
      <Footer />
    </div>
  );
}

export default App;
