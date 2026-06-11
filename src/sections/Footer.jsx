import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import '../styles/Footer.css';

const QUICK_LINKS = [
  { label: 'Pokémon TCG', href: '#pokemon'  },
  { label: 'One Piece TCG', href: '#onepiece' },
  { label: 'About',       href: '#about'    },
  { label: 'Contact',     href: '#contact'  },
];

const SHOP_LINKS = [
  { label: 'Browse Singles', href: '#pokemon' },
  { label: 'Buy Now',        href: '#contact' },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com',       icon: '📸' },
  { label: 'TikTok',    href: 'https://tiktok.com',          icon: '🎵' },
  { label: 'Email',     href: 'mailto:cards@cardvault.ca',   icon: '✉️' },
];

const linkSx = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.87rem',
  color: '#7a7d85',
  textDecoration: 'none',
  display: 'block',
  transition: 'color 0.2s',
  '&:hover': { color: '#e8e8e8' },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: '#161719',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        pt: 7, pb: 3,
        px: { xs: '1.25rem', md: '2.5rem' },
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1100 }}>

        {/* TOP ROW: Contact + Socials */}
        <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between" sx={{ mb: 5, pb: 5, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Contact */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600,
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a7d85', mb: 1 }}
            >
              Get in Touch
            </Typography>
            <Typography
              sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#e8e8e8',
                    display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.35rem' }}
            >
              ✉️ Email us at{' '}
              <Link href="mailto:cards@cardvault.ca" sx={{ color: '#f5c842', textDecoration: 'none', '&:hover': { opacity: 0.78 } }}>
                cards@cardvault.ca
              </Link>
              {' '}for any questions.
            </Typography>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
            <Typography
              sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600,
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a7d85', mb: 1.5 }}
            >
              Follow Along
            </Typography>
            <Stack direction="row" spacing={1}>
              {SOCIALS.map(({ label, href, icon }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    width: 36, height: 36,
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: '#1e2024',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem',
                    color: '#7a7d85',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.2s',
                    '&:hover': { borderColor: 'rgba(255,255,255,0.18)', transform: 'translateY(-2px)' },
                  }}
                >
                  {icon}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* BOTTOM ROW: Logo + Link columns */}
        <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between">

          {/* Brand block */}
          <Grid item xs={12} md={5}>
            <Box
              component="a"
              href="#Hero"
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.5rem',
                letterSpacing: '0.06em',
                color: '#e8e8e8',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.1em',
                mb: 1.25,
              }}
            >
              Card<Box component="span" sx={{ color: '#f5c842' }}>Vault</Box>
              <Box component="span" sx={{ width: 5, height: 5, borderRadius: '50%', background: '#c0392b', ml: '3px', mb: '8px', flexShrink: 0 }} />
            </Box>

            <Typography
              sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#7a7d85',
                    lineHeight: 1.8, maxWidth: 340, mb: 2 }}
            >
              A solo seller who's been in the TCG space for years. Every card personally
              assessed, sleeved, and shipped with care.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={0.75}>
              {['Ships from Vancouver, BC', 'Tracked Shipping', 'Combined Shipping'].map((b) => (
                <Box
                  key={b}
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.68rem', fontWeight: 500,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    px: 1, py: 0.4,
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '4px',
                    color: '#4a4d55',
                  }}
                >
                  {b}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Link columns */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>

              <Grid item xs={6} md={5}>
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600,
                                   letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a7d85', mb: 1.5 }}>
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  {QUICK_LINKS.map(({ label, href }) => (
                    <Link key={href} href={href} sx={linkSx}>{label}</Link>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={6} md={5}>
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600,
                                   letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a7d85', mb: 1.5 }}>
                  Shop
                </Typography>
                <Stack spacing={1}>
                  {SHOP_LINKS.map(({ label, href }) => (
                    <Link key={href} href={href} sx={linkSx}>{label}</Link>
                  ))}
                </Stack>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

        {/* Copyright strip */}
        <Box
          sx={{
            mt: 6, pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 1,
          }}
        >
          <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#4a4d55' }}>
            © {year} CardVault · Solo seller, big stock.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 500,
                               letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f5c842', opacity: 0.6 }}>
              Pokémon TCG
            </Typography>
            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 500,
                               letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c0392b', opacity: 0.6 }}>
              One Piece TCG
            </Typography>
          </Stack>
        </Box>

      </Container>
    </Box>
  );
}