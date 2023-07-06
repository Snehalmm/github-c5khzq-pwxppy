import './App.css';
import Login from './pages/login';
import Planet from './pages/planet';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container">
      <h1>Star Wars</h1>
      {isLogin ? <Planet /> : <Login setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
