// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/navbar-logo.png';
import './../styles/NavBar.css';

const links = [
  { label: 'Pokémon', href: '#pokemon', tag: 'poke' },
  { label: 'One Piece', href: '#onepiece', tag: 'op' },
  { label: 'About', href: '#about', tag: null },
  { label: 'Contact', href: '#contact', tag: null },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeDrawer = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="navbar__logo">
          Card<span className="navbar__logo-accent">Vault</span>
          <span className="navbar__logo-dot" aria-hidden="true" />
        </a>

        <ul className="navbar__links">
          {links.map(({ label, href, tag }) => (
            <li key={href}>
              <a href={href}>
                {label}
                {tag === 'poke' && <span className="navbar__tag navbar__tag--poke">TCG</span>}
                {tag === 'op'   && <span className="navbar__tag navbar__tag--op">TCG</span>}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">Buy Now</a>

        <button
          className={`navbar__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar__drawer${open ? ' open' : ''}`}>
        {links.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeDrawer}>{label}</a>
        ))}
        <a href="#contact" className="navbar__cta" onClick={closeDrawer}>Buy Now</a>
      </div>
    </>
  )
}