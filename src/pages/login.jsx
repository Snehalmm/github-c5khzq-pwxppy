import { useState } from 'react';

const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const loginCall = () => {
    if (username?.length > 0) {
      if (username === 'Luke Skywalker' && password === '19BBY') {
        setIsLogin(true);
      } else {
        setError('Ambigous username; more than one result');
      }
    } else {
      setError('Reuired username and password');
    }
  };

  return (
    <div className="flex-container">
      <div style={{ color: 'red' }}> {error}</div>
      <div className="flex">
        <label className="label-login" htmlFor="username">
          Name{' '}
        </label>
        <input
          id="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div className="flex">
        <label className="label-password" htmlFor="password">
          Password{' '}
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={loginCall}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
