import { BASE_URL } from "../config";

const Season = {
  create(year, params) {
    return fetch(`${BASE_URL}/tournaments/${year}/entries`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  },
  index(year) {
    return fetch(`${BASE_URL}/tournaments/${year}/entries`, {
      credentials: "include"
    }).then(res => res.json());
  },
}

export default Season;
