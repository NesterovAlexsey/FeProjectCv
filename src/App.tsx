import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './features/products/Products';
import Info from './features/info/Info';
import Repo from './features/repos/Repo';
import Error from './features/error/Error';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>General project info</h1>
      <nav>
        <Link to="/products">Products</Link>{' '}
        <Link to="/info">Info</Link>{' '}
        <Link to="/repos">View Repository</Link>{' '}
      </nav>
      <br />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/info" element={<Info />} />
        <Route path="/repos" element={<Repo />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
