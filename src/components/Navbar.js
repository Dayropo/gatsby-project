import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/blog">Our Blog</Link>
      </div>
    </nav>
  )
}
