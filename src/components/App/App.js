import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Profile from "../Profile/Profile";
import {
  fetchItems,
  loadItems,
  removeItems,
  editUserProfile,
} from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { register, signin, checkToken } from "../../utils/auth";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const appContextValue = { state: { loggedIn, userData } };
  const history = useNavigate();
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
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const handleRegistration = (email, password, name, avatar) => {
    register(email, password, name, avatar)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        setCurrentUser(res.data);
        handleCloseModal();

        history.push("/profile");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoggedIn(false));
  };

  const handleLogin = (email, password) => {
    signin(email, password)
      .then((response) => {
        return response;
      })

      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);

          checkToken(data.token)
            .then((res) => {
              setLoggedIn(true);
              setCurrentUser(res.data);
              handleCloseModal();

              history.push("/profile");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          return;
        }
      });
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

  /* useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((data) => {
          setCurrentUser(data.data); // Set the user data in your component state
          setLoggedIn(true);
        })
        .catch(() => console.error);
    } else {
      localStorage.removeItem("jwt");
      setLoggedIn(false);
      console.log("Token not Found");
    }
  }, [loggedIn, history]);

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
            <Routes>
              <Route exact path="/">
                <Main onSelectCard={handleItemCard} loggedIn={loggedIn} />
              </Route>
              <ProtectedRoute path="/profile">
                <Profile
                  onSelectCard={handleItemCard}
                  handleActiveCreateModal={handleActiveCreateModal}
                  selectedCard={selectedCard}
                  handleEditModal={handleEditModal}
                  handleLogout={handleLogout}
                  loggedIn={loggedIn}
                />
              </ProtectedRoute>
            </Routes>
            <Footer />

            {activeModal === "signup" && (
              <RegisterModal
                handleCloseModal={handleCloseModal}
                isOpen={activeModal === "create"}
                handleRegistration={handleRegistration}
                setActiveModal={setActiveModal}
              />
            )}
            {activeModal === "login" && (
              <LoginModal
                handleCloseModal={handleCloseModal}
                isOpen={activeModal === "login"}
                handleLogin={handleLogin}
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
