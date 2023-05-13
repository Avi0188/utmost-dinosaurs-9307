
import './App.css';
import Footer from './components/Footer';

import Navbar from "./components/Navbar"
import RoutersRoute from './components/RoutersRoute';
function App() {
  return (
    <div className="App" style={{width:"95%", margin:"auto"}}>
  <Navbar />
 
  <RoutersRoute />
    </div>
  );
}

export default App;
