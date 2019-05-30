import { BASE_URL } from "../config";

const Tournament = {
  index() {
    return fetch(`${BASE_URL}/tournaments`, {
      credentials: "include"
    }).then(res => res.json());
  },
  show(year) {
    return fetch(`${BASE_URL}/tournaments/${year}`, {
      credentials: "include"
    }).then(res => res.json());
  }
}

export default Tournament;
