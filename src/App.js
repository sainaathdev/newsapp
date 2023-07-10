
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<News key='general' pageSize={6} country='us' category='general' />}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={6} country='us' category='business' />}></Route>
            <Route exact path='/Entertainment' element={<News key='Entertainment' pageSize={6} country='us' category='Entertainment' />}></Route>
            <Route exact path='/general' element={<News key='general' pageSize={6} country='us' category='general' />}></Route>
            <Route exact path='/Health' element={<News key='Health' pageSize={6} country='us' category='Health' />}></Route>
            <Route exact path='/Science' element={<News key='Science' pageSize={6} country='us' category='Science' />}></Route>
            <Route exact path='/Sports' element={<News key='Sports' pageSize={6} country='us' category='Sports' />}></Route>
            <Route exact path='/Technology' element={<News key='Technology' pageSize={6} country='us' category='Technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
