import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./JobCard.css";

const JobCard = ({
  item,
  onSelectCard,
  selectedCard,
  onCardLike,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="card">
      {loggedIn ? (
        <>
          <div className="card__title-block">
            <div className="card__title">{item.name}</div>
          </div>
        </>
      ) : (
        <>
          <div className="card__title-block">
            <div className="card__title">{item.name}</div>
          </div>
        </>
      )}
      <img
        src={item?.imageUrl || item?.link}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default JobCard;
