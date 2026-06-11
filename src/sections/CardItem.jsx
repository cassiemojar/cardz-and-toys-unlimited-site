import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CARD_ICONS = {
  pk1: '🔥', pk2: '⚡', pk3: '🌊', pk4: '🔮', pk5: '🌪️', pk6: '🌙',
  op1: '⚔️', op2: '🗡️', op3: '🗺️', op4: '👒', op5: '💊', op6: '🐍',
};

export default function CardItem({ card, tint, onAdd, inCart }) {
  return (
    <div className={`card-item card-item--${tint}`}>
      <div className="card-item__img">
        <span className="card-item__img-placeholder">
          {CARD_ICONS[card.id]}
        </span>

        <span className="card-item__rarity">
          {card.rarity}
        </span>
      </div>

      <div className="card-item__body">
        <Typography className="card-item__name">
          {card.name}
        </Typography>

        <Typography className="card-item__meta">
          {card.set} · {card.number}
        </Typography>

        <div className="card-item__footer">
          <div className="card-item__price-group">
            <Typography className="card-item__price">
              ${card.price.toFixed(2)}
            </Typography>

            <Typography className="card-item__condition">
              {card.condition}
            </Typography>
          </div>

          <Button
            className={`card-item__add-btn${inCart ? ' added' : ''}`}
            onClick={() => !inCart && onAdd(card)}
            disableRipple
          >
            {inCart ? '✓ Added' : '+ Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}