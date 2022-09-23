import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import PlantDetailContainer from './components/PlantDetailContainer';
import PlantsList from './components/PlantsList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<PlantsList />} />
        <Route path='/:category' element={<PlantsList />} />
        <Route path='/detail/:id/:pepe' element={<PlantDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
