import "./App.css"
import { useQuery } from "react-query"
import readFeedPostsRequest from "../api/readFeedRequest"
import Feed from "../components/Feed"
import CreatePostForm from "../components/CreatePostForm"

function App() {
  const { isLoading, data: posts } = useQuery("posts", readFeedPostsRequest)

  return (
    <>
      <h1>Home Page</h1>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        posts.map((post) => <Feed post={post} key={post._id} />)
      )}
      <CreatePostForm />
    </>
  )
}

export default App
