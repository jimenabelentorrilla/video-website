import './App.css'
import Sidebar from './components/Sidebar';
import ContainerFilms from './components/ContainerFilms';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Carrousel />
      <ContainerFilms />
      <Footer />
    </div>
  );
}

export default App;
