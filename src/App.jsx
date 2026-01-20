import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccordionPage from './pages/AccordionPage'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path='/' element={<AccordionPage />}/>
      </Route>
    </Routes>
  )
}

export default App