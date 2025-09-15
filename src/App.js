
import './App.css';
import Creations from './Components/Creations';
import CreationsDesktop from './Components/CreationsDesktop';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Interactive from './Components/Interactive';
import ShowCase from './Components/ShowCase'

const App = () => {
  return (
    <>
      <Header/>
      <ShowCase/>
      <Interactive/>
      <Creations/>
      <CreationsDesktop/>
      <Footer/>
    </>
  );
}

export default App;
