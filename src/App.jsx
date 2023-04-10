import './App.css'
import Sidebar from './components/Sidebar';
import HeroContainer from './components/HeroContainer';
import ContainerFilms from './components/ContainerFilms';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HeroContainer />
      <ContainerFilms 
      title="Recently Added Films" />
      <ContainerFilms 
      title="Top Rated Films"/>
      <Footer />
    </div>
  )
}

export default App
