import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Global from './styles/Global'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import Layout from './components/Layout'
import AddPost from './pages/AddPost'
import { app } from './firebaseConfig'


function App() {

  return (
    <div className='container'>
      <Global />
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> }/>
          <Route path='sign-up' element={ <SignUpPage /> }/>
          <Route path='sign-in' element={ <SignInPage /> }/>
          <Route path='post' element={ <AddPost /> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
