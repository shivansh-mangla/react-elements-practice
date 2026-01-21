import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccordionPage from './pages/AccordionPage'
import MainLayout from './layouts/MainLayout'
import ModalPage from './pages/ModalPage'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path='/' element={<AccordionPage />}/>
        <Route path='/modal' element={<ModalPage />}/>
      </Route>
    </Routes>
  )
}

export default App