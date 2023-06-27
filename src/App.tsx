import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Info from './features/info/Info';
import Repo from './features/repos/Repo';
import Error from './features/error/Error';

function App(): JSX.Element {
  return (
    <div className="App">
      <nav>
        <Link to="/">Info</Link>{' '}
        <Link to="/repos">View Repository</Link>{' '}
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/repos" element={<Repo />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
