const baseUrl = "https://www.themuse.com/api/public";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const fetchJobs = () => {
  const getJobs = fetch(`${baseUrl}/jobs?page=13`, {
    method: "GET",
  }).then((res) => checkResponse(res));
  return getJobs;
};

export function editUserProfile({ name, avatar }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => checkResponse(res));
}

// signin
export const signin = () => {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;
  const isAuthenticated = username === "George" && password === "Bob22";

  setTimeout(() => {
    if (isAuthenticated) {
      const loggedInUser = {
        username: "George",
        password: "Bob22",
      };
      console.log("User Logged In:", loggedInUser);
    } else {
      console.log("Authentication Failed");
    }
  }, 1000);
};

// register
export const register = (username, email, password) => {
  const newUser = {
    email: "gaktines@gmail.com",
    password: "Bob22",
    username: "George",
  };
  setTimeout(() => {
    console.log("User Created:", newUser);
  }, 1000);
};