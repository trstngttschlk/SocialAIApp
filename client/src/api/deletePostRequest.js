import { API_URL } from "./config"

export default (post) => {
  return fetch(`${API_URL}/post/deletePost/${post._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application.json",
    },
  })
}
