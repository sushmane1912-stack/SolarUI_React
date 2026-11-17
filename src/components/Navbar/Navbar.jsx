import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleSignOut = () => {
    // Clear auth token/session
    localStorage.removeItem("authToken");
    window.location.href = "/login"; // redirect to login
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/content">Services</Link>
        <Link to="/enquiries">Enquiries</Link>
        <Link to="/admin/enquiries">Check Enquiries</Link>
      </div>

      <div className="navbar-right">
        <div className="profile-menu">
          <FaUserCircle className="profile-icon" onClick={handleToggle} />
          {open && (
            <div className="dropdown">
              <Link to="/profile" onClick={() => setOpen(false)}>
                Profile
              </Link>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
