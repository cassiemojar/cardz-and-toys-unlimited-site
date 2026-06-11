import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../styles/CartDrawer.css';

export default function CartDrawer({ open, onClose, cartItems = [] }) {
  const total = cartItems.reduce((sum, c) => sum + c.price, 0);

  // Close on Escape key
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop${open ? ' cart-backdrop--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className={`cart-drawer${open ? ' cart-drawer--open' : ''}`} role="dialog" aria-label="Shopping cart">

        {/* Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__header-left">
            <ShoppingCartOutlinedIcon className="cart-drawer__header-icon" />
            <Typography className="cart-drawer__title">Your Cart</Typography>
            {cartItems.length > 0 && (
              <span className="cart-drawer__count">{cartItems.length}</span>
            )}
          </div>
          <IconButton onClick={onClose} className="cart-drawer__close" aria-label="Close cart">
            <CloseIcon />
          </IconButton>
        </div>

        {/* Body */}
        <div className="cart-drawer__body">
          {cartItems.length === 0 ? (
            /* Empty state */
            <div className="cart-drawer__empty">
              <div className="cart-drawer__empty-icon" aria-hidden="true">
                <ShoppingCartOutlinedIcon sx={{ fontSize: '3rem' }} />
              </div>
              <Typography className="cart-drawer__empty-title">Your cart is empty</Typography>
              <Typography className="cart-drawer__empty-sub">
                Add some cards to get started — browse Pokémon or One Piece singles below.
              </Typography>

              <div className="cart-drawer__empty-actions">
                <Button
                  className="cart-drawer__btn-browse"
                  onClick={onClose}
                  href="#pokemon"
                >
                  Continue Shopping
                </Button>
                <Button className="cart-drawer__btn-login" href="#contact">
                  Log In
                </Button>
              </div>
            </div>
          ) : (
            /* Cart items */
            <div className="cart-drawer__items">
              {cartItems.map((card) => (
                <div key={card.id} className={`cart-drawer__item cart-drawer__item--${card.id.startsWith('pk') ? 'poke' : 'op'}`}>
                  <div className="cart-drawer__item-img">
                    {card.id.startsWith('pk') ? '🃏' : '⚔️'}
                  </div>
                  <div className="cart-drawer__item-info">
                    <Typography className="cart-drawer__item-name">{card.name}</Typography>
                    <Typography className="cart-drawer__item-meta">{card.set} · {card.condition}</Typography>
                  </div>
                  <Typography className={`cart-drawer__item-price cart-drawer__item-price--${card.id.startsWith('pk') ? 'poke' : 'op'}`}>
                    ${card.price.toFixed(2)}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — only shown when items exist */}
        {cartItems.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total-row">
              <Typography className="cart-drawer__total-label">Subtotal</Typography>
              <Typography className="cart-drawer__total-amount">${total.toFixed(2)}</Typography>
            </div>
            <Typography className="cart-drawer__shipping-note">
              Shipping calculated at checkout
            </Typography>
            <Button className="cart-drawer__checkout-btn" href="#contact" onClick={onClose}>
              Proceed to Checkout
            </Button>
            <Button className="cart-drawer__continue-btn" onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        )}

      </div>
    </>
  );
}