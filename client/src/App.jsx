import "./App.css"
import { useQuery } from "react-query"
import readPostsRequest from "./api/readPostsRequest"
import Post from "./components/Post"

function App() {
  const { isLoading, data: posts } = useQuery("posts", readPostsRequest)

  return (
    <>
      <h1>Home Page</h1>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        posts.map((post) => <Post post={post} key={post._id} />)
      )}
    </>
  )
}

export default App
