import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <div className="grid">
          <div>
            <h3>Logo</h3>
            <p>Lorem, ipsum.</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>Lagos, Nigeria</p>
          </div>
          <div>
            <h3>Work Inquiries</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>example@email.com</p>
          </div>
          <div>
            <h3>Stay in Touch</h3>
            <p></p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2020, Company Name</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
