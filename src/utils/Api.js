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