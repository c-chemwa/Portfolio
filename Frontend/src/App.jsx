import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import UIUX from "./pages/UIUX";
import Music from "./pages/Music";
import Film from "./pages/Film";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/music" element={<Music />} />
          <Route path="/film" element={<Film />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;