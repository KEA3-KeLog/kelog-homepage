/* eslint-disable */

import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainNav from './MainNav';
import MainPage from './pages/MainPage';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/members" element={<div>Members임</div>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
