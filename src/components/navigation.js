import React from 'react'
import { Link } from 'gatsby'

export default function Navigation() {
  return (
    <nav>
        <Link className="NavigationItem" title="Who We Are" to="/about">ABOUT</Link>
        <Link className="NavigationItem" title="What We Do" to="/services">SERVICES</Link>
        <Link className="NavigationItem" title="Get In Touch" to="/contact">CONTACT</Link>
    </nav>
  )
}