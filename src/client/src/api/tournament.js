import { BASE_URL } from "../config";

const Tournament = {
  index() {
    return fetch(`${BASE_URL}/tournaments`, {
      credentials: "include"
    }).then(res => res.json());
  },
  show(id) {
    return fetch(`${BASE_URL}/tournaments/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  }
}

export default Tournament;
