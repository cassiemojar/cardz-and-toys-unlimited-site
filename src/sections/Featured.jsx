import FeaturedPoke from './FeaturedPoke.jsx';
import FeaturedOP from './FeaturedOP.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import '../styles/Featured.css'

export default function Featured({
  cartItems,
  onAdd,
}) {
  return (
    <>
      <ScrollReveal>
        <FeaturedPoke
          cartItems={cartItems}
          onAdd={onAdd}
        />
      </ScrollReveal>

      <div className="featured-divider" />

      <ScrollReveal>
        <FeaturedOP
          cartItems={cartItems}
          onAdd={onAdd}
        />
      </ScrollReveal>
    </>
  );
}