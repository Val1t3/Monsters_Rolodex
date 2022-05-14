import './card-list.styles.css'

import Card from "../card/card.component"

export default function CardList({monsters}) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <Card monster={monster} key={monster.id} />
        )
      })}
    </div>
  );
};
