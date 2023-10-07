import './App.css';
import Header from '../Header/Header.jsx';
import Promo from '../Promo/Promo.jsx';
import Gallery from '../Gallery/Gallery.jsx';
import About from '../About/About.jsx';

import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <Promo />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
