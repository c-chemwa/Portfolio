import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <Link to="/" className="font-bold text-xl">My Portfolio</Link>
      <div className="space-x-4">
        <Link to="/uiux">UI/UX</Link>
        <Link to="/music">Music</Link>
        <Link to="/film">Film</Link>
      </div>
    </nav>
  );
}