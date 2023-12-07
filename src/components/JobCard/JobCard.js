import React/*, { useContext } */from "react";
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./JobCard.css";

const JobCard = ({ data, onSelectCard, loggedIn }) => {
  //const currentUser = useContext(CurrentUserContext);

  return (
    <div className="card">
      {loggedIn ? (
        <>
          <div className="card__title-block">
            <div className="card__title">{data.companyName}</div>
          </div>
        </>
      ) : (
        <>
          <div className="card__title-block">
            <div className="card__title">{data.companyName}</div>
          </div>
        </>
      )}
      <div className="card_job">{data.jobName}</div>
      <div className="card__date">{Date}</div>
      <a href={data.link} onClick={onSelectCard}>
        Job Link
      </a>
    </div>
  );
};

export default JobCard;
