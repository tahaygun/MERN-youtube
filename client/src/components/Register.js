import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      password_con: "",
      userdata: null,
      success: false
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
      .post("https://aqueous-meadow-18078.herokuapp.com/api/register", this.state)
      .then(result => {
        if (result.data.errors) {
          return this.setState(result.data);
        }
        return this.setState({
          userdata: result.data,
          errors: null,
          success: true
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.success && <p>You are successfully registerated!</p>}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="username"
            onChange={this.changeHandler}
            name="username"
            id="username"
          />{" "}
          {this.state.errors &&
            this.state.errors.username && (
              <p>{this.state.errors.username.msg}</p>
            )}
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.changeHandler}
            id="emailreg"
          />
          {this.state.errors &&
            this.state.errors.email && <p>{this.state.errors.email.msg}</p>}
          <br />
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="firstname"
            name="firstname"
            id="firstname"
          />
          {this.state.errors &&
            this.state.errors.firstname && (
              <p>{this.state.errors.firstname.msg}</p>
            )}
          <br />
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="lastname"
            name="lastname"
            id="lastname"
          />
          {this.state.errors &&
            this.state.errors.lastname && (
              <p>{this.state.errors.lastname.msg}</p>
            )}
          <br />
          <input
            type="password"
            onChange={this.changeHandler}
            placeholder="password"
            name="password"
            id="passwordreg"
          />
          {this.state.errors &&
            this.state.errors.password && (
              <p>{this.state.errors.password.msg}</p>
            )}
          <br />
          <input
            type="password"
            onChange={this.changeHandler}
            placeholder="password_con"
            name="password_con"
            id="password_con"
          />
          {this.state.errors &&
            this.state.errors.password_con && (
              <p>{this.state.errors.password_con.msg}</p>
            )}
          <br />
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
