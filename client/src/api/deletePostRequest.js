import { API_URL } from "./config"

export default (post) => {
  return fetch(`${API_URL}/posts/${post._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application.json",
    },
  })
}
