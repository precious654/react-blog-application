import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Global from './styles/Global'
import Home from './pages/Home'

function App() {
  return (
    <div className='container'>
      <Global />
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }/>
      </Routes>
    </div>
  )
}

export default App
