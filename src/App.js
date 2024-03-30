import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Components/Home";
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <div >
      
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
