import './App.css'
import Sidebar from './components/Sidebar';
import MovieInfo from './components/MovieInfo';
import ContainerFilms from './components/ContainerFilms';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <MovieInfo
        title="SAM AWAY" 
        genero="Adventure, Fantasy" 
        year="2019" 
        duration="136 Min." 
        director="Todd Burns" 
        cast="Jenny Loifer, Sarah Obrien, Larry Moss Jr." 
        description="When a tornado hits through City of Peaceville,
        Samantha (Jenny Loifer) and her dog, Ricko, are whisked away in their house to an amazing journey." />
      <ContainerFilms />
      <Footer />
    </div>
  );
}

export default App;
