import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccordionPage from './pages/AccordionPage'
import MainLayout from './layouts/MainLayout'
import ModalPage from './pages/ModalPage'
import Counterpage from './pages/Counterpage'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path='/' element={<AccordionPage />}/>
        <Route path='/modal' element={<ModalPage />}/>
        <Route path='/counter' element={<Counterpage />}/>
      </Route>
    </Routes>
  )
}

export default App