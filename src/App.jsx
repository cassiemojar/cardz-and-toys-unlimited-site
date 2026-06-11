import * as React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/NavBar.jsx';
import Hero from './sections/Hero';
import Featured from './sections/Featured';
import Footer from './sections/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0e0f11', paper: '#161719' },
    text: { primary: '#e8e8e8', secondary: '#7a7d85' },
  },
  typography: { fontFamily: "'Inter', sans-serif" },
});

export default function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCart = (card) => {
    setCartItems((prev) =>
      prev.some((c) => c.id === card.id) ? prev : [...prev, card]
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar cartCount={cartItems.length} cartItems={cartItems} />
      <main>
        <Hero />
        <Featured cartItems={cartItems} onAdd={handleAddToCart} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}