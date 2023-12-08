import "./Main.css";
import React from "react";
import JobCard from "../JobCard/JobCard";

function Main({ onSelectCard, jobItems, setSelectedCard, loggedIn }) {
  const sortedCards = jobItems?.filter((item) => {
    console.log(jobItems);
    console.log(item);
    return item;
});

  return (
    <main className="main">
      <section className="card__section">
        Today is {Date}
        <div className="card__items">
        {sortedCards.map((x) => (
            <JobCard
              item={x}
              key={x._id}
              onSelectCard={onSelectCard}
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


/* */