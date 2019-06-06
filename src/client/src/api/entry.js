import { BASE_URL } from "../config";

const Entry = {
  boys_singles(year) {
    return fetch(`${BASE_URL}/tournaments/${year}/boys_singles`, {
      credentials: "include"
    }).then(res => res.json());
  },
}

export default Entry;
