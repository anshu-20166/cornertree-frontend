import React, { Component } from "react";
import { Link } from "react-router-dom";
class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            CornerTree
          </Link>

          <div class="md-form mt-2 search-bar">
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              id="navBarSearchForm"
            />
          </div>

          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item nav-link">Login</li>
              <li className="navbar-item nav-link">Sign up</li>
              <li className="navbar-item nav-link ">BroadCast</li>
              <li className="navbar-item nav-link">Expert support</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
