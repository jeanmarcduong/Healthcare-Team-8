import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MediChain
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === '/' ? 'active' : ''
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === '/information' ? 'active' : ''
                }`}
              >
                <Link className="nav-link" to="/information">
                  Information
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === '/example' ? 'active' : ''
                }`}
              >
                <Link className="nav-link" to="/example">
                  Interactive Example
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === '/files' ? 'active' : ''
                }`}
              >
                <Link className="nav-link" to="/files">
                  File Cabinet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
