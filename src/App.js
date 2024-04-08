
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;
