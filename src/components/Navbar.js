import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">NewsPlanet</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
              
                <li className="nav-item">
                    <Link className="nav-link" to="/business">Bussiness</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Sports">Sports</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
            </li>
                </ul>
                
            </div>
            </nav>
      </div>
    )
  }
}

export default Navbar





