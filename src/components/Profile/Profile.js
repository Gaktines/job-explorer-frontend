import "./Profile.css";
import SideBar from "../SideBar/SideBar";

const Profile = ({ handleEditModal, handleLogout, onSubmit }) => {
  return (
    <section className="profile">
      <SideBar
        handleEditModal={handleEditModal}
        handleLogout={handleLogout}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default Profile;
