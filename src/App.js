import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Login from './routes/Login/Login';

function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='login' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
