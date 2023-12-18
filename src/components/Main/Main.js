import "./Main.css";
import React from "react";
import JobCard from "../JobCard/JobCard";

function Main({ onSelectCard, jobItems, setSelectedCard, loggedIn }) {
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

const sortedCards = jobItems?.sort((a, b) => 
    new Date(a.jobPostingDate) - new Date(b.jobPostingDate)
  
);
   



  return (
    <main className="main">
      <section className="card__section">
        Today is {date}
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
