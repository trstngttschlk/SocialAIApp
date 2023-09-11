const API_URL = `http://localhost:4000`

export default () => {
  return fetch(`${API_URL}/posts`).then((res) => res.json())
}
