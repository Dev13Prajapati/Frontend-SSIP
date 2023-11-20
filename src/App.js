import Footer from './Components/Footer';
import MainBody from './Components/MainBody';
import Scheme from './Components/Scheme';
import StickyNavbar from './Components/StickyNavbar';

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <MainBody />
      <Scheme />
      <Footer />
    </div>
  );
}

export default App;