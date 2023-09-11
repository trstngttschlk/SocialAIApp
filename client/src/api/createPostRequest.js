import { API_URL } from "./config"

export default (post) => {
  return fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      caption: post.caption,
    }),
  }).then((response) => response.json())
}
