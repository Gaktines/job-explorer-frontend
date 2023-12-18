import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  isOpen,
  setActiveModal,
  handleLogin,
  isLoading,
  handleCloseModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  const onClickSignup = () => {
    setActiveModal("signup");
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Logging In..." : "Sign in"}
      onClose={handleCloseModal}
    >
      <h2>Log in</h2>

      <input
        className="modal__input"
        type="email"
        name="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleEmailChange}
      ></input>

      <input
        className="modal__input"
        type="text"
        name="password"
        placeholder="Password"
        minLength="1"
        maxLength="8"
        required
        value={password}
        onChange={handlePasswordChange}
      ></input>

      <div className="modal__button-container">
        <button
          className="modal__submit-register-button"
          type="button"
          name="button"
          onClick={onClickSignup}
        >
          or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;