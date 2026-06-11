import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../styles/Hero.css';


const STATS = [
  { num: '200+', label: 'Singles in Stock', color: '#f5c842' },
  { num: '2',    label: 'Card Games',       color: '#e8e8e8' },
  { num: '48hr', label: 'Avg. Ship Time',   color: '#c0392b' },
  { num: '5★',   label: 'Seller Rating',    color: '#e8e8e8' },
];
 
// Each floating element: SVG path, position, size, colour tint, animation class
const FLOATERS = [
  // Pokéball outline  — top left
  {
    id: 'pokeball-1',
    anim: 'float-slow',
    style: { top: '8%', left: '4%', width: 90, opacity: 0.15 },
    tint: '#f5c842',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4"/>
        <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="4"/>
        <circle cx="50" cy="50" r="13" stroke="currentColor" strokeWidth="4"/>
        <circle cx="50" cy="50" r="6" fill="currentColor"/>
      </svg>
    ),
  },
  // Pokéball outline — bottom right, bigger
  {
    id: 'pokeball-2',
    anim: 'float-medium',
    style: { bottom: '10%', right: '3%', width: 130, opacity: 0.05 },
    tint: '#f5c842',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="3.5"/>
        <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="3.5"/>
        <circle cx="50" cy="50" r="13" stroke="currentColor" strokeWidth="3.5"/>
        <circle cx="50" cy="50" r="6" fill="currentColor"/>
      </svg>
    ),
  },
  // Pikachu lightning bolt
  {
    id: 'bolt-1',
    anim: 'float-fast',
    style: { top: '15%', left: '18%', width: 50, opacity: 0.15 },
    tint: '#f5c842',
    svg: (
      <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,2 10,52 28,52 18,98 52,42 32,42" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  // Lightning bolt — right side
  {
    id: 'bolt-2',
    anim: 'float-slow',
    style: { top: '55%', right: '8%', width: 38, opacity: 0.15 },
    tint: '#f5c842',
    svg: (
      <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,2 10,52 28,52 18,98 52,42 32,42" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  // Star outline (Pokémon star)
  {
    id: 'star-1',
    anim: 'float-medium',
    style: { top: '40%', left: '2%', width: 44, opacity: 0.07 },
    tint: '#f5c842',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
          stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  // Katana / sword — left mid
  {
    id: 'sword-1',
    anim: 'float-slow',
    style: { top: '30%', left: '20%', width: 28, height: 140, opacity: 0.1 },
    tint: '#c0392b',
    svg: (
      <svg viewBox="0 0 30 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* blade */}
        <path d="M15 5 L18 130 L15 145 L12 130 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        {/* guard */}
        <ellipse cx="15" cy="132" rx="10" ry="4" stroke="currentColor" strokeWidth="2.5"/>
        {/* handle */}
        <rect x="12" y="136" width="6" height="20" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      </svg>
    ),
  },
  // Sword — right top, rotated
  {
    id: 'sword-2',
    anim: 'float-fast',
    style: { top: '12%', right: '20%', width: 24, height: 120, opacity: 0.2, transform: 'rotate(25deg)' },
    tint: '#c0392b',
    svg: (
      <svg viewBox="0 0 30 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5 L18 130 L15 145 L12 130 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <ellipse cx="15" cy="132" rx="10" ry="4" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="12" y="136" width="6" height="20" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      </svg>
    ),
  },
  // Crossed swords — bottom left
  {
    id: 'swords-crossed',
    anim: 'float-medium',
    style: { bottom: '12%', left: '6%', width: 80, opacity: 0.2 },
    tint: '#c0392b',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="3"/>
        <circle cx="90" cy="10" r="6" stroke="currentColor" strokeWidth="3"/>
        <rect x="40" y="46" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
  },
  // One Piece Jolly Roger skull
  {
    id: 'skull-1',
    anim: 'float-slow',
    style: { top: '20%', right: '5%', width: 70, opacity: 0.2 },
    tint: '#c0392b',
    svg: (
      <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* skull dome */}
        <path d="M20 60 Q20 20 50 15 Q80 20 80 60 L75 75 L25 75 Z" stroke="currentColor" strokeWidth="3.5"/>
        {/* jaw */}
        <rect x="30" y="74" width="40" height="18" rx="4" stroke="currentColor" strokeWidth="3"/>
        {/* teeth */}
        <line x1="40" y1="74" x2="40" y2="92" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="50" y1="74" x2="50" y2="92" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="60" y1="74" x2="60" y2="92" stroke="currentColor" strokeWidth="2.5"/>
        {/* eyes */}
        <circle cx="37" cy="52" r="9" stroke="currentColor" strokeWidth="3"/>
        <circle cx="63" cy="52" r="9" stroke="currentColor" strokeWidth="3"/>
        {/* nose */}
        <path d="M46 62 L50 68 L54 62" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  // One Piece skull — bottom centre-right, smaller
  {
    id: 'skull-2',
    anim: 'float-fast',
    style: { bottom: '20%', right: '18%', width: 48, opacity: 0.06 },
    tint: '#c0392b',
    svg: (
      <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 60 Q20 20 50 15 Q80 20 80 60 L75 75 L25 75 Z" stroke="currentColor" strokeWidth="3.5"/>
        <rect x="30" y="74" width="40" height="18" rx="4" stroke="currentColor" strokeWidth="3"/>
        <line x1="40" y1="74" x2="40" y2="92" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="50" y1="74" x2="50" y2="92" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="60" y1="74" x2="60" y2="92" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="37" cy="52" r="9" stroke="currentColor" strokeWidth="3"/>
        <circle cx="63" cy="52" r="9" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
  },
  // Straw hat outline
  {
    id: 'hat',
    anim: 'float-medium',
    style: { top: '60%', left: '14%', width: 80, opacity: 0.2 },
    tint: '#c0392b',
    svg: (
      <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* brim */}
        <ellipse cx="60" cy="55" rx="56" ry="12" stroke="currentColor" strokeWidth="3.5"/>
        {/* dome */}
        <path d="M25 55 Q28 18 60 14 Q92 18 95 55" stroke="currentColor" strokeWidth="3.5"/>
        {/* band */}
        <path d="M28 46 Q60 52 92 46" stroke="currentColor" strokeWidth="2.5"/>
      </svg>
    ),
  },
  // Pokéball small — top right area
  {
    id: 'pokeball-3',
    anim: 'float-fast',
    style: { top: '35%', right: '1%', width: 55, opacity: 0.1 },
    tint: '#f5c842',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4"/>
        <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="4"/>
        <circle cx="50" cy="50" r="13" stroke="currentColor" strokeWidth="4"/>
      </svg>
    ),
  },
];
 
export default function Hero() {
  return (
    <Box id="Hero" component="section" className="hero">
 
      {/* Glow */}
      <Box aria-hidden="true" className="hero__bg-glow" />
      {/* Grid */}
      <Box aria-hidden="true" className="hero__bg-grid" />
 
      {/* Floating outlines */}
      {FLOATERS.map(({ id, anim, style, tint, svg }) => (
        <Box
          key={id}
          aria-hidden="true"
          className={`hero__floater hero__floater--${anim}`}
          style={{ color: tint, ...style }}
        >
          {svg}
        </Box>
      ))}
 
      <Container maxWidth={false} sx={{ maxWidth: 680, position: 'relative', zIndex: 1 }}>
 
        {/* Eyebrow */}
        <Box className="hero__eyebrow">
          <Box component="span" aria-hidden="true" className="hero__eyebrow-dot" />
          Solo Seller · Singles &amp; Sets · Canada
        </Box>
 
        {/* Title */}
        <Typography variant="h1" className="hero__title">
          <span className="hero__title-poke">Rare</span> Cards.
          <br />
          <span className="hero__title-op">Real</span> Prices.
        </Typography>
 
        {/* Subtitle */}
        <Typography className="hero__sub">
          Hand-picked Pokémon and One Piece singles from a collector who actually
          cares about condition. No bulk filler, no inflated grabs.
        </Typography>
 
        {/* CTAs */}
        <Box className="hero__actions">
          <Button href="#pokemon" className="hero__btn-primary">Browse Cards</Button>
          <Button href="#contact" className="hero__btn-ghost">Get in Touch</Button>
        </Box>
 
        {/* Stats strip */}
        <Box className="hero__stats">
          {STATS.map(({ num, label, color }, i) => (
            <Box key={label} className="hero__stat" style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <Typography className={`hero__stat-num hero__stat-num--${color === '#f5c842' ? 'poke' : color === '#c0392b' ? 'op' : 'neu'}`}>
                {num}
              </Typography>
              <Typography className="hero__stat-label">{label}</Typography>
            </Box>
          ))}
        </Box>
 
      </Container>
    </Box>
  );
}