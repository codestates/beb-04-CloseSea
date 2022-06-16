import About from './pages/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Stats from './pages/Stats';
import Explore from './pages/Explore';
import Create from './pages/Create';
import Wallet from './pages/Wallet';
import Resources from './pages/Resources';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        {/* 1. Switch -> Routes */}

        <Routes>
          {/* 2. component -> element, element형태로 넘겨야함 <Home /> */}
          <Route path="/" element={<Main />} />

          <Route path="/create" element={<Create />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
