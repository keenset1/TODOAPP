import React, { Component } from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);

    // Set initial state with empty email and password, not logged in, and no error
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      error: null
    };

    // Bind event handlers to `this`
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // Update state when input fields are changed
  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  // Handle sign up form submission
handleSignUp(event) {
  event.preventDefault();

  const { email, password } = this.state;

  // Check if email and password are not empty
  if (email.trim() === '' || password.trim() === '') {
    this.setState({
      error: 'Email and password are required.'
    });
    return;
  }

  // Check if password is at least 6 characters long
  if (password.length < 6) {
    this.setState({
      error: 'Password must be at least 6 characters long.'
    });
    return;
  }

  // Your sign up logic here

  // Update state to reflect that user is logged in
  this.setState({
    isLoggedIn: true
  });
}

  // Handle login form submission
  handleLogin(event) {
    event.preventDefault();

    // Your login logic here

    // Update state to reflect that user is logged in
    this.setState({
      isLoggedIn: true
    });
  }

  // Handle logout button click
  handleLogout(event) {
    event.preventDefault();

    // Your logout logic here

    // Update state to clear email and password and set user to not logged in
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    });
  }

  render() {
    return (
      <div>
        {/* Display error message if one exists */}
        {this.state.error && <p>{this.state.error}</p>}

        {/* Render either logged in or logged out state */}
        {this.state.isLoggedIn ? (
          <div>
            <p>You are logged in.</p>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            {/* Render sign up form */}
            <form onSubmit={this.handleSignUp}>
              <h2>Sign Up</h2>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
              <br />
              <button type="submit">Sign Up</button>
            </form>

            {/* Render login form */}
            <form onSubmit={this.handleLogin}>
              <h2>Login</h2>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
