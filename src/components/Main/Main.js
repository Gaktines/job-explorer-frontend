import "./Main.css"
import React, { useMemo, useContext } from "react";


function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  setSelectedCard,
  onCardLike,
  loggedIn,
}) {
  

  return (
    <main className="main">
      <section className="card__section">
        bob
        <div className="card__items">
          {sortedCards.map((x) => (
            <ItemCard
              item={x}
              key={x._id}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
              onClick={() => {
                setSelectedCard(x);
              }}
              loggedIn={loggedIn}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
