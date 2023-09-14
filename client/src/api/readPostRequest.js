import { API_URL } from "./config"

export default (id) => {
  return fetch(`${API_URL}/post/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
