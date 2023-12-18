import "./Header.css";
import JobSeekerLogo from "../../images/JobSeekerLogo.png";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {  useContext } from "react";

const Header = ({ onClick, loggedIn, onClickSignup, onClickLogin }) => {
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;
  
  const name = currentUser ? currentUser.name : "";

  

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={JobSeekerLogo} alt="logo" />
        </Link>
      </div>
      <Link to="/" className="header__home-link">
        Home
      </Link>
      <Link to="/about" className="header__about-link">
        About
      </Link>
      <div className="header__avatar-logo">
        {loggedIn ? (
          <>
            <Link to="/profile">{currentUser?.name}</Link>
            <div>
              {showAvatar ? (
                <img className="header__avatar" src={avatar} alt="avatar" />
              ) : (
                <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <button
              className="header__signup-button"
              type="text"
              onClick={onClickSignup}
            >
              Sign Up
            </button>
            <button
              className="header__signin-button"
              type="text"
              onClick={onClickLogin}
            >
              Sign In
            </button>
            <button
            className="header__burger-menu"
            type="button"
            ></button>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
