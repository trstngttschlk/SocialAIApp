import { API_URL } from "./config"

export default (post) => {
  return fetch(`${API_URL}/post/createPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      caption: post.caption,
    }),
  }).then((res) => res.json())
}
