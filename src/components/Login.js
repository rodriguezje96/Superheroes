import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "email": "",
      "password": ""
    }
  }
  handleEmail(event) {
    this.setState({ email: event.target.value })
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  login() {
    if (this.state.email !== "" && this.state.password !== "") {
      axios.post("http://challenge-react.alkemy.org/", this.state)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          alert("");
        })

    }
    else {
      alert("Fields are missing")
    }
  }
  render() {

    if (localStorage.getItem("token")) {
      return <Redirect to="/home" />
    }
    return (

      <form>
        <div className="form-group">
          <label htmlFor="email">Name:</label>
          <input type="text" className="form-control" id="email" name="email" onChange={(event) => this.handleEmail(event)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" name="password" onChange={(event) => this.handlePassword(event)}></input>
        </div>
        <button type="button" class="btn btn-success" onClick={() => this.login()}>Login</button>
      </form>
    );
  }
}

export default Login;