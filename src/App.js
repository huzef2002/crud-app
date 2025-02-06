import logo from './logo.svg';
import './App.css';
import Creat from './Component/Creat';
import { Route, Routes } from 'react-router-dom';
import Read from './Component/Read';
import Edit from './Component/Edit';

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path='/' element={<Read />}></Route>
          <Route path='/creat' element={<Creat/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
