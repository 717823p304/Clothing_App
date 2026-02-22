import { Routes, Route, Link } from "react-router-dom";
import Men from "./Clothing/Men.jsx";
import Women from "./Clothing/Women.jsx";
import Children from "./Clothing/Children.jsx";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Fashion Hub</h1>

      {/* Navigation Links */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/men" style={{ margin: "10px" }}>Men</Link>
        <Link to="/women" style={{ margin: "10px" }}>Women</Link>
        <Link to="/children" style={{ margin: "10px" }}>Children</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<h2>Welcome to Fashion Hub</h2>} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/children" element={<Children />} />
      </Routes>
    </div>
  );
}

export default App;