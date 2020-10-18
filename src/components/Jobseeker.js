import React, { Component } from "react";
import Navbar from "./Navbar";
class Jobseeker extends Component {
  constructor() {
    super();
    this.state = {
      isshow: false,
    };
  }
  fun = () => {
    console.log(this.state.isshow);
    this.setState({
      isshow: true,
    });
  };
  render() {
    return (
      <div>
        <Navbar />

        <div className="jobseeker">
          <h3>Fill your details</h3>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="enter your name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contact Number</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="enter your contact number"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                <b>Freshers</b>
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                <b>Experinced</b>
              </label>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Job function</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="enter the job function"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Job location</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="enter the job location "
              />
            </div>
            <button type="button" class="btn btn-danger">
              Upload your Resume
            </button>
            <br />
            <br />
            {this.state.isshow ? (
              <div id="show">
                There are 300 recruiters similar to your skills, would you like
                to “ review” or “broadcast
              </div>
            ) : (
              <div></div>
            )}
            <button type="button" class="btn btn-secondary" onClick={this.fun}>
              Broadcast
            </button>{" "}
            <br />
            <br />
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Jobseeker;
