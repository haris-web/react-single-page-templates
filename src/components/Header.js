import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink } from 'react-router-hash-link'

export default function Header() {
  return (
    <div>
      <nav>
        <h1>Future Star</h1>
        <main>
        <HashLink to={"/#Home"}>Home</HashLink>
        <Link to={"/contact"}>Contacts</Link>
        <HashLink to={"/#About"}>About</HashLink>
        <HashLink to={"/#Brands"}><>Brands</></HashLink>
        <Link to={"/services"}>Services</Link>
        </main>
      </nav>
    </div>
  )
}
