import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg align-items-center" style={{ background: '#030637' }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/"  style={{backgroundImage: 'linear-gradient(90deg, rgba(0, 150, 136, 1) 0%, rgba(255, 193, 7, 1) 100%)',  webkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>{this.props.title}</Link>
          <button className="navbar-toggler btn btn-outline-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav gap-3">
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" to="/business">Business</Link></li>
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" to="/health">Health</Link></li>
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" to="/science">Science</Link></li>
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" to="/sports">Sports</Link></li>
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" to="/technology">Technology</Link></li>
              <li className="nav-item rounded-pill"><Link className="nav-link text-light" to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar