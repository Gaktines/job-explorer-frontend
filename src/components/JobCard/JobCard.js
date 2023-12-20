import React /*, { useContext } */ from "react";
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./JobCard.css";

const JobCard = ({ onSelectCard, loggedIn, item }) => {
  //const currentUser = useContext(CurrentUserContext);
  const date = item?.jobPostingDate;

  return (
    <section className="card__block">
      <div className="card">
        {loggedIn ? (
          <>
            <div className="card__title-block">
              <p className="card__title">{item?.companyName}</p>
            </div>
          </>
        ) : (
          <>
            <div className="card__title-block">
              <p className="card__title">{item?.companyName}</p>
            </div>
          </>
        )}
        <p className="card__job-name">{item?.jobName}</p>
        <p className="card__job-pubdate">{date}</p>
        <a
          href={item?.jobLink}
          target="_blank"
          rel="noreferrer"
          onClick={onSelectCard}
        >
          Job Link
        </a>
      </div>
    </section>
  );
};

export default JobCard;
