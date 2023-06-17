import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer' ;
import Film from './component/Films';
import Navigation from './component/Navigation'

function App() {
  return (
    <div className='App'>
    <Navigation />
    <Film/>
    <Footer />
  </div>
  );
}

export default App;
