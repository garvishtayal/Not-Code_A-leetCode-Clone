import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/signup-page/signup'
import Login from './components/login-page/login'
import AllProblems from './components/all-problems-page/all-problems'
import Submissions from './components/submissions/submissions'
import Problem from './components/problem-page/problem'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/problems" element={<AllProblems/>}/>
        <Route path="/submissions" element={<Submissions/>}/>
        <Route path="/problems/:id" element={<Problem/>}/>

      </Routes>
    </>
  )
}

export default App
