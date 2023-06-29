import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Info from './features/info/Info';
import Repo from './features/repos/Repo';
import Error from './features/error/Error';
import Layout from './features/layouts/Layout';
import HomePage from './features/homepage/HomePage';

function App(): JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/repos" element={<Repo />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;

// function App(): JSX.Element {
//   return (
//     <div className="App">
//       <nav>
//         <Link to="/">Info</Link>{' '}
//         <Link to="/repos">View Repository</Link>{' '}
//       </nav>
//       <br />
//       <Routes>
//         <Route path="/" element={<Info />} />
//         <Route path="/repos" element={<Repo />} />
//         <Route path="/*" element={<Error />} />
//       </Routes>
//     </div>
//   );
// }
