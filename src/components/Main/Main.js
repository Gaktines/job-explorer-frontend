import "./Main.css";
import JobCard from "../JobCard/JobCard";

function Main({ onSelectCard, jobItems, setSelectedCard, loggedIn }) {
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const sortedCards = jobItems?.sort(
    (a, b) => new Date(a.jobPostingDate) - new Date(b.jobPostingDate)
  );

  return (
    <main className="main">
      <section className="main__card-section">
        <p className="main__date">Today is {date}</p>
        <div className="main__cards">
          {sortedCards.map((x) => (
            <JobCard
              item={x}
              key={x.jobLink}
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
