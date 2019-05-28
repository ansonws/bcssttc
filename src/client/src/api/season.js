import { BASE_URL } from "../config";

const Season = {
  create(id, params) {
    return fetch(`${BASE_URL}/tournaments/${id}/entries`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }
}

export default Season;
