import React from 'react'
import { Link } from 'gatsby'

export default function Navigation() {
  return (
    <nav>
        <Link className="NavigationItem" title="Get In Touch" to="/contact">CONTACT</Link>
    </nav>
  )
}