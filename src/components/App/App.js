import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Profile from "../Profile/Profile";
import { fetchJobs, editUserProfile } from "../../utils/Api";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
const [jobItems, setJobItems] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const appContextValue = { state: { loggedIn, userData } };
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleItemCard = (card) => {
    setActiveModal("preview");

    setSelectedCard(card);
  };

  const handleActiveCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleEditModal = () => {
    setActiveModal("update");
  };

  const handleLogInModal = () => {
    setActiveModal("login");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    history.push("/");
  };

  const handleUpdate = (data) => {
    setIsLoading(true);
    editUserProfile(data)
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

useEffect(() => {
fetchJobs()
.then((data) => {
  console.log(data);
})
}, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider value={appContextValue}>
        <div>
          <Header
            onClick={handleActiveCreateModal}
            onClickLogin={handleLogInModal}
            onClickSignup={handleSignupModal}
            loggedIn={loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main onSelectCard={handleItemCard} loggedIn={loggedIn} />
            </Route>
            <Route path="/profile">
              <Profile
                onSelectCard={handleItemCard}
                handleActiveCreateModal={handleActiveCreateModal}
                selectedCard={selectedCard}
                handleEditModal={handleEditModal}
                handleLogout={handleLogout}
                loggedIn={loggedIn}
              />
            </Route>
          </Switch>
          <Footer />

          {activeModal === "signup" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              onClickLogin={handleLogInModal}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "update" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "update"}
              onSubmit={handleUpdate}
              handleEditModal={handleEditModal}
              setActiveModal={setActiveModal}
              currentUser={currentUser}
            />
          )}
        </div>
      </AppContext.Provider>
    </CurrentUserContext.Provider>
  );
}

/* 
Header
Main
Footer
ModalWithForm
ItemModal
*/

export default App;
