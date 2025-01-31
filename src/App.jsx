//ไฟล์นี้ไว้จัดการเส้นทาง
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginRunner from './views/LoginRunner'
import RegisterRunner from './views/RegisterRunner'
import RunOfRunner from './views/RunOfRunner'
import AddRunOfRunner from './views/AddRunOfRunner'
import EditRunOfRunner from './views/EditRunOfRunner'
import DelRunOfRunner from './views/DelRunOfRunner'
import EditRunner from './views/EditRunner'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRunner />} />
        <Route path="/runner/RegisterRunner" element={<RegisterRunner />} />
        <Route path="/run/RunOfRunner" element={<RunOfRunner />} />
        <Route path="/run/AddRunOfRunner" element={<AddRunOfRunner />} />
        <Route path="/run/EditRunOfRunner" element={<EditRunOfRunner />} />
        <Route path="/run/DelRunOfRunner" element={<DelRunOfRunner />} />
        <Route path="/runner/EditRunner" element={<EditRunner />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

