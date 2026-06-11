import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import CartDrawer from '../sections/CartDrawer';
import '../styles/Navbar.css';

const NAV_TABS = ['Pokemon', 'One Piece', 'Products', 'About', 'Contact'];

const TAB_CHIPS = {
  'Pokemon':   { label: 'TCG', mod: 'poke' },
  'One Piece': { label: 'TCG', mod: 'op'   },
};

export default function Navbar({ cartCount = 0, cartItems = [] }) {
  const [anchorEl,   setAnchorEl]   = React.useState(null);
  const [activeTab,  setActiveTab]  = React.useState('Home');
  const [scrolled,   setScrolled]   = React.useState(false);
  const [cartOpen,   setCartOpen]   = React.useState(false);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMenuClick = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = ()  => setAnchorEl(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const id = tab === 'Home' ? 'Hero' : tab.replace(' ', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    handleMenuClose();
  };

  return (
    <>
      <Box component="nav" className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className="navbar__toolbar" disableGutters>

          {/* Logo */}
          <a href="#Hero" className="navbar__logo">
            Card<span className="navbar__logo-accent">Vault</span>
            <span className="navbar__logo-dot" aria-hidden="true" />
          </a>

          {/* Hamburger — mobile only */}
          <IconButton
            className="navbar__hamburger"
            onClick={handleMenuClick}
            size="large"
            aria-label="open menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
            slotProps={{ paper: { className: 'navbar__menu-paper' } }}
          >
            {NAV_TABS.map((tab) => (
              <MenuItem
                key={tab}
                onClick={() => handleTabChange(tab)}
                className="navbar__menu-item"
              >
                {tab}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => handleTabChange('Contact')}
              className="navbar__menu-cta"
            >
              BUY NOW
            </MenuItem>
          </Menu>

          {/* Desktop nav links */}
          <Box className="navbar__links" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {NAV_TABS.map((tab) => (
              <Button
                key={tab}
                onClick={() => handleTabChange(tab)}
                disableRipple
                className={`navbar__tab${activeTab === tab ? ' active' : ''}`}
                endIcon={
                  TAB_CHIPS[tab] ? (
                    <Chip
                      label={TAB_CHIPS[tab].label}
                      size="small"
                      className={`navbar__chip navbar__chip--${TAB_CHIPS[tab].mod}`}
                    />
                  ) : null
                }
              >
                {tab}
              </Button>
            ))}
          </Box>

          {/* Right side: Buy Now → Cart */}
          <Box className="navbar__right">
            <Button
              onClick={() => handleTabChange('Contact')}
              className="navbar__cta"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              Buy Now
            </Button>

            <IconButton
              className="navbar__cart"
              onClick={() => setCartOpen(true)}
              aria-label={`Open cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
            >
              <Badge
                badgeContent={cartCount}
                className="navbar__cart-badge"
                invisible={cartCount === 0}
              >
                <ShoppingCartOutlinedIcon className="navbar__cart-icon" />
              </Badge>
            </IconButton>
          </Box>

        </Toolbar>
      </Box>

      {/* Cart drawer — rendered outside nav so it overlays the full page */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
}