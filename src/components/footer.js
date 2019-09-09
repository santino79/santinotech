import React from 'react'
//import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
          © {new Date().getFullYear()} 
          {` Santinotech Ltd. (Registered in Northern Ireland, Company Reg No: NI654431)`}
      </div>
    </footer>
  )
}
