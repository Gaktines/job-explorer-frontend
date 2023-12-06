import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({
  isOpen,
  setActiveModal,
  handleRegistration,
  isLoading,
  handleCloseModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegistration(email, password, name, avatar);
  };
  const onClickLogin = () => {
    setActiveModal("login");
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Saving..." : "Sign up"}
      onClose={handleCloseModal}
    >
      <h2 className="modal_header">Sign up</h2>
      <input
        className="modal__input-name"
        type="text"
        name="name"
        placeholder="Username"
        minLength="1"
        maxLength="30"
        value={name}
        onChange={handleNameChange}
      ></input>

      <input
        className="modal__email"
        type="email"
        name="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleEmailChange}
      ></input>

      <input
        className="modal__password"
        type="text"
        name="password"
        placeholder="Password"
        minLength="1"
        maxLength="8"
        required
        value={password}
        onChange={handlePasswordChange}
      ></input>

      <input
        className="modal__password"
        type="text"
        name="password"
        placeholder="Password Again"
        minLength="1"
        maxLength="8"
        value={password}
        onChange={handlePasswordChange}
      ></input>

      <div className="modal__button-container">
        <button
          className="modal__submit-login-button"
          type="button"
          name="button"
          onClick={onClickLogin}
        >
          or Sign in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
