import { API_URL } from "./config"

export default () => {
  return fetch(`${API_URL}/posts/:id`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
