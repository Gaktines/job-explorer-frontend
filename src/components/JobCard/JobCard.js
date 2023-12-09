import React/*, { useContext } */from "react";
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./JobCard.css";

const JobCard = ({ jobItems, onSelectCard, loggedIn }) => {
  //const currentUser = useContext(CurrentUserContext);
console.log(jobItems);
  return (
    <div className="card">
      {loggedIn ? (
        <>
          <div className="card__title-block">
            <div className="card__title">{jobItems.company.name}</div>
          </div>
        </>
      ) : (
        <>
          <div className="card__title-block">
            <div className="card__title">{jobItems.company.name}</div>
          </div>
        </>
      )}
      <div className="card_job">{jobItems.jobName}</div>
      <div className="card__job-pubDate">{Date}</div>
      <a href={jobItems.link} onClick={onSelectCard}>
        Job Link
      </a>
    </div>
  );
};

export default JobCard;
