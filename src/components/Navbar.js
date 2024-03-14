import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <p>Cocacolastic</p>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
