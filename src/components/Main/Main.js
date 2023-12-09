import "./Main.css";
import React from "react";
import JobCard from "../JobCard/JobCard";

function Main({ onSelectCard, jobItems, setSelectedCard, loggedIn }) {
  return (
    <main className="main">
      <section className="card__section">
        Today is {Date}
        <div className="card__items">
          <JobCard
            jobItems={jobItems}
            onSelectCard={onSelectCard}
            onClick={() => {
              setSelectedCard(jobItems);
            }}
            loggedIn={loggedIn}
          />
        </div>
      </section>
    </main>
  );
}

export default Main;

/*
 */
