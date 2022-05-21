import './App.css';
import Texts  from './components/Texts';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Middle/>
      <Footer/>
      <Texts/>
    </div>
  );
}

export default App;
