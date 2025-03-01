import React from "react";
import { Main } from './components/Main';
import './components/Styles.css'
import { Routes, Route } from 'react-router-dom'
import { Marvel } from "./components/CharacterDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Marvel />} />
      </Routes>
    </>
  )
}

export default App;