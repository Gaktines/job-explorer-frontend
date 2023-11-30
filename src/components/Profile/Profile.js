import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";


const Profile = ({
  onSelectCard,
  handleActiveCreateModal,
  selectedCard,
  handleEditModal,
  handleLogout,
  loggedIn,
  onCardLike,
  onSubmit,
}) => {
  return (
    <section className="profile">
      <SideBar handleEditModal={handleEditModal} handleLogout={handleLogout} onSubmit={onSubmit}/>
      <JobSection
        onSelectCard={onSelectCard}
        handleActiveCreateModal={handleActiveCreateModal}
      
        selectedCard={selectedCard}
        loggedIn={loggedIn}
        onCardLike={onCardLike}
      />
    </section>
  );
};

export default Profile;
