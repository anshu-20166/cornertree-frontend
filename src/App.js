import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
//import PostJob from "./components/PostJob";
import Home from "./components/Home";
import Jobseeker from "./components/Jobseeker";
import PostJob from "./components/PostJob";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/jobseeker" component={Jobseeker} />
            <Route path="/jobpost" component={PostJob} />
          </Switch>
          {/* <Route path="/user" component={CreateUser} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
