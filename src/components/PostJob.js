import React, { Component } from "react";
import Navbar from "./Navbar";
class PostJob extends Component {
  render() {
    console.log("render");
    return (
      <div>
        <Navbar />
        <div id="job_posts">
          <h4>POST A JOB </h4>
          <form>
            <div className="form-group">
              <label>Job Role: </label>

              <input type="text" />
            </div>
            <label>Function: </label>
            <input type="text" />
            <br />
            <div className="form-group">
              <label>Sub Function: </label>
              <input type="text" />
            </div>
            <label>Company: </label>
            <input type="text" />
            <div className="form-group">
              <label>Top 3 Core Skills:</label>
              <input className="short-input" type="text" />
              <input className="short-input" type="text" />
              <input className="short-input" type="text" />
            </div>
            <div className="form-group">
              <label>Top 3 soft Skills:</label>
              <input className="short-input" type="text" />
              <input className="short-input" type="text" />
              <input className="short-input" type="text" />
            </div>
            <div className="form-group">
              <label>Location: </label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>PIN: </label>
              <input className="short-input" type="text" />
            </div>
            <div className="form-group">
              <label>compensation: </label>
              <input className="short-input" type="text" />
              <select>
                <option value="1">USD</option>
                <option value="1">EUR</option>
                <option value="1">JPY</option>
              </select>
            </div>
            <div className="form-group">
              <label>Expected date of JOINING </label>
              <input className="short-input" type="text" />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostJob;
