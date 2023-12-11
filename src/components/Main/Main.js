import "./Main.css";
import React from "react";
import JobCard from "../JobCard/JobCard";

function Main({ onSelectCard, jobItems, setSelectedCard, loggedIn }) {
  console.log(jobItems);
  const sortedCards = JobItems?.filter((item) => {
    return item.publication_date === Date;
  });


  return (
    <main className="main">
      <section className="card__section">
        Today is {Date}
        <div className="card__items">
        {sortedCards.map((x) => (
            <JobCard
              item={x}
              
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

/*
 */
