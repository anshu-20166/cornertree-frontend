import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home">
          <h1>Home Page</h1>
          <Link to="/jobseeker">
            <button className="btn1" type="button" class="btn btn-warning">
              JOB SEEKER
            </button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/jobpost">
            <button class="btn1" type="button" class="btn btn-warning">
              RECURITER
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
