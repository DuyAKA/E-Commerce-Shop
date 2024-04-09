
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/login/signup' element={<Signup/>} />
    </Routes>
    </div>
  );
}

export default App;
