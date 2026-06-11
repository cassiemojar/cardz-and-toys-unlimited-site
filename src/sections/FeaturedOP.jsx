import Typography from '@mui/material/Typography';
import { ONEPIECE_CARDS } from '../data/Cards.js';
import CardItem from './CardItem';

export default function FeaturedOP({
  cartItems,
  onAdd,
}) {
  return (
    <section className="featured" id="onepiece">

      <div className="featured__header">
        <div className="featured__header-left">

          <span className="featured__tag featured__tag--op">
            One Piece TCG
          </span>

          <Typography className="featured__title">
            Featured One Piece
          </Typography>

        </div>

        <a
          href="#onepiece-all"
          className="featured__view-all featured__view-all--op"
        >
          View all One Piece →
        </a>
      </div>

      <div className="featured__grid">
        {ONEPIECE_CARDS.map(card => (
          <CardItem
            key={card.id}
            card={card}
            tint="op"
            onAdd={onAdd}
            inCart={cartItems.some(c => c.id === card.id)}
          />
        ))}
      </div>

    </section>
  );
}