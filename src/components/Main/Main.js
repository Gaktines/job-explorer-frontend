import "./Main.css";
import React from "react";
import JobCard from "../JobCard/JobCard";

function Main({ onSelectCard, jobItems, setSelectedCard, loggedIn }) {
  console.log(jobItems);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const sortedCards = jobItems?.filter((item) => {
    return item.jobPostingDate === date;
  });


  return (
    <main className="main">
      <section className="card__section">
        Today is {date}
        <div className="card__items">
        {sortedCards.map((x) => (
          console.log(x),
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
