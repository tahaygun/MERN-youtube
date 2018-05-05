import React, { Component } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("https://aqueous-meadow-18078.herokuapp.com/api/login", this.state)
      .then(res => {
        if (res.data.error) {
          return this.setState({ error: res.data.message });
        }
        if (res.data.errors) {
          return this.setState({ valerrors: res.data.errors });
        }
        return (window.location = "/mainpage");
      });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitHandler}>
          {this.state.valerrors &&
            this.state.valerrors.email && (
              <p>{this.state.valerrors.email.msg}</p>
            )}
          <input
            onChange={this.changeHandler}
            type="email"
            name="email"
            id="email"
          />{" "}
          <br />
          {this.state.valerrors &&
            this.state.valerrors.password && (
              <p>{this.state.valerrors.password.msg}</p>
            )}
          <input
            onChange={this.changeHandler}
            type="password"
            name="password"
            id="password"
          />{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
      </div>
    );
  }
}

export default Login;
