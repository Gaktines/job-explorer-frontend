import React/*, { useContext } */from "react";
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./JobCard.css";

const JobCard = ({ onSelectCard, loggedIn, item }) => {
  //const currentUser = useContext(CurrentUserContext);
  return (
    <div className="card__block">
    <div className="card">
      {loggedIn ? (
        <>
          <div className="card__title-block">
            <div className="card__title">{item?.companyName}</div>
          </div>
        </>
      ) : (
        <>
          <div className="card__title-block">
            <div className="card__title">{item?.companyName}</div>
          </div>
        </>
      )}
      <div className="card_job">{item?.jobName}</div>
      <div className="card__job-pubDate">{Date}</div>
      <a href={item?.jobLink} onClick={onSelectCard}>
        Job Link
      </a>
    </div>
    </div>
  );
};

export default JobCard;
