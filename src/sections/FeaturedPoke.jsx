import Typography from '@mui/material/Typography';
import { POKEMON_CARDS } from '../data/Cards.js';
import CardItem from './CardItem';

export default function FeaturedPoke({
  cartItems,
  onAdd,
}) {
  return (
    <section className="featured" id="pokemon">

      <div className="featured__header">
        <div className="featured__header-left">

          <span className="featured__tag featured__tag--poke">
            Pokémon TCG
          </span>

          <Typography className="featured__title">
            Featured Pokémon
          </Typography>

        </div>

        <a
          href="#pokemon-all"
          className="featured__view-all featured__view-all--poke"
        >
          View all Pokémon →
        </a>
      </div>

      <div className="featured__grid">
        {POKEMON_CARDS.map(card => (
          <CardItem
            key={card.id}
            card={card}
            tint="poke"
            onAdd={onAdd}
            inCart={cartItems.some(c => c.id === card.id)}
          />
        ))}
      </div>

    </section>
  );
}