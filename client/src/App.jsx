import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AuthContext from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Registration from './pages/Registration'

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route 
            path='/dashboard' 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  )
}

export default App
