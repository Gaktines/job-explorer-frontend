import { checkResponse } from "./Api";

export const baseUrl = process.env.NODE_ENV === 'production' 
? 'https://api.wtwr.ix.tc'
: 'http://localhost:3001';

// signup
//export const signup = ({ name, avatar, email, password }) => {
// fetch(`${baseUrl}/signup`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name, avatar, email, password }),
// });
//};

// signin
export const signin = ({ email, password }) => {
  const 
};

// register
export const register = () => {
  const newUser = {
    email: "gaktines@gmail.com",
    password: "Bob22",
    username: "George",

  };
  setTimeout(() => {
    console.log("User Created:", newUser);
  }, 1000);
};

// check token
export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
