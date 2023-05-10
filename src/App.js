import {Routes,Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Home,Menu,Cart} from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
