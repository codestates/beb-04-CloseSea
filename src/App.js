import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Stats from "./pages/Stats";
import Explore from "./pages/Explore";
import Trade from "./pages/Trade";
import Wallet from "./pages/Wallet";
import Resources from "./pages/Resources";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        {/* 1. Switch -> Routes */}

        <Routes>
          {/* 2. component -> element, element형태로 넘겨야함 <Home /> */}
          <Route path="/" element={<Main />} />

          <Route path="/trade" element={<Trade />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
