import React, { useState } from 'react';

  const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    const response = await fetch('https://my-api.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('https://my-api.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

const AuthenticatedApp = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Login />;
  }

  return (
    <div>
      <h1>Welcome! You are authenticated.</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <SignUp />
      <Login />
      <AuthenticatedApp />
    </div>
  );
};

export default App;
