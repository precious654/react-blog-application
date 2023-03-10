import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Global from './styles/Global'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'

function App() {
  return (
    <div className='container'>
      <Global />
      <Routes>
        <Route element={<Header />}>
          <Route path='/' element={ <Home /> }/>
          <Route path='/sign-up' element={ <SignUpPage /> }/>
          <Route path='/sign-in' element={ <SignInPage /> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
